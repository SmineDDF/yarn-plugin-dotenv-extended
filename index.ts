import { Hooks } from "@yarnpkg/core";
import dotenvExtended from "dotenv-extended";
import findConfig from "find-config";
import path from 'node:path';

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

export const hooks: Hooks = {
  async setupScriptEnvironment(_project, scriptEnv) {
    const directoriesToCheck = findIntermediaryDirs(scriptEnv.PROJECT_CWD, scriptEnv.INIT_CWD);

    directoriesToCheck.forEach((dir) => {
      const variables = dotenvExtended.load({
        path: findConfig('.env', { cwd: dir }) || undefined,
        defaults: findConfig('.env.defaults', { cwd: dir }) || undefined,
        schema: findConfig('.env.schema', { cwd: dir }) || undefined,
      });
      
      Object.assign(scriptEnv, variables);
    })
  },
};
