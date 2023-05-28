import { Hooks } from "@yarnpkg/core";
import dotenvExtended from "dotenv-extended";
import findConfig from "find-config";
import path from 'node:path';

const envSetterRegex = /^([a-zA-Z0-9]+)=('(.*)'|"(.*)"|(.*))$/;

/**
 * Produces array of paths between two directories:
 * 
 * from:   /foo/bar
 * to:     /foo/bar/baz/xux
 * result: [
 *           /foo/bar
 *           /foo/bar/baz
 *           /foo/bar/baz/xux
 *         ]
 * 
 * @param from starting path
 * @param to ending path
 * @returns inclusive array of intermediary directories
 */
function findIntermediaryDirs(from: string, to: string): string[] {
  let current = path.resolve(to);
  const end = path.resolve(from);

  const dirs = [current];

  while (current !== end) {
    current = path.dirname(current);
    dirs.push(current);
  }

  dirs.reverse();
  
  return dirs;
}

/**
 * Given a script body, finds and returns KEYs in KEY=VALUE pairs
 * 
 * Respects calls to cli tools that may be called before the
 * variable setting (e.g. `cross-env`)
 * 
 * script: FOO=1 BAR=2 BAZ=3 echo $FOO-$BAR-$BAZ
 * result: [FOO, BAR, BAZ]
 * 
 * @param script script body
 * @returns array of recognized variable names
 */
function findEnvVariablesInScript(script: string): string[] {
  const varNames: string[] = [];
  const scriptParts = script.split(' ');

  let envSettersFound = false;
  let envSettersEnded = false;

  scriptParts.forEach(scriptPart => {
    if (envSettersEnded) {
      return;
    }

    const envSetterMatch = envSetterRegex.exec(scriptPart);

    if (envSetterMatch) {
      envSettersFound = true;

      varNames.push(envSetterMatch[1]);

      return;
    }

    if (envSettersFound) {
      envSettersEnded = true;
    }
  });

  return varNames;
}

export const hooks: Hooks = {
  // loads .env files and injects their contents into environment
  async setupScriptEnvironment(_project, scriptEnv) {
    const directoriesToCheck = findIntermediaryDirs(scriptEnv.PROJECT_CWD, scriptEnv.INIT_CWD);
    const loadedEnvironment = {};

    directoriesToCheck.forEach((dir) => {
      const variables = dotenvExtended.load({
        path: findConfig('.env', { cwd: dir }) || undefined,
        defaults: findConfig('.env.defaults', { cwd: dir }) || undefined,
        schema: findConfig('.env.schema', { cwd: dir }) || undefined,
      });
      
      Object.assign(loadedEnvironment, variables);
    });

    // overriding loaded variables with variables already present in env
    Object.assign(loadedEnvironment, scriptEnv);
    Object.assign(scriptEnv, loadedEnvironment);
  },

  // allow overwriting variables in package.json scripts by removing variables
  // which are set in the script from script scope
  //
  // e.g. it allows creating scripts like 
  //   "build": "NODE_ENV=production tsc"
  // even when NODE_ENV is defined in .env
  //
  // (original inability to do that stems from the fact that variables which are
  //  set in  `setupScriptEnvironment` take precedence before the variables
  //  declared in scripts, which is expectable, but counter-intuitive from
  //  user's standpoint)
  async wrapScriptExecution(executor, project, locator, scriptName, extra) {
    const scriptExecutorWithEnvManualOverwrite = async () => {
      const identifiedManuallySetEnvVariables = findEnvVariablesInScript(extra.script);

      identifiedManuallySetEnvVariables.forEach(variable => {
        delete extra.env[variable];
      })

      return executor();
    }

    return scriptExecutorWithEnvManualOverwrite;
  },
};
