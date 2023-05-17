import { Hooks } from "@yarnpkg/core";
import dotenvExtended from "dotenv-extended";
import findConfig from "find-config";

export const hooks: Hooks = {
  async setupScriptEnvironment(_project, scriptEnv) {
    const variables = dotenvExtended.load({
      path: findConfig('.env', { cwd: scriptEnv.INIT_CWD || undefined }) || undefined,
      defaults: findConfig('.env.defaults', { cwd: scriptEnv.INIT_CWD || undefined }) || undefined,
      schema: findConfig('.env.schema', { cwd: scriptEnv.INIT_CWD || undefined }) || undefined,
    });

    Object.assign(scriptEnv, variables);
  },
};
