import { Hooks } from "@yarnpkg/core";
import dotenvExtended from "dotenv-extended";
import findConfig from "find-config";

export const hooks: Hooks = {
  async setupScriptEnvironment(_project, scriptEnv) {
    const variables = dotenvExtended.load({
      path: findConfig('.env') || undefined,
      defaults: findConfig('.env.defaults') || undefined,
      schema: findConfig('.env.schema') || undefined,
    });

    Object.assign(scriptEnv, variables);
  },
};
