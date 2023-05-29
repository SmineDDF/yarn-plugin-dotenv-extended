# yarn-plugin-dotenv-extended

> A [Yarn 2+ (Berry) plugin](https://yarnpkg.com/features/plugins) to initialize all your scripts with [`dotenv-extended`](https://github.com/keithmorris/node-dotenv-extended)

## Installation

```sh
yarn plugin import https://github.com/SmineDDF/yarn-plugin-dotenv-extended/releases/download/3.0.1/plugin-dotenv-extended.js
```

## Usage

- Put a `.env` file with environment variable `KEY=VALUE` pairs in your project directory
- Run any of your package scripts, e.g. `yarn run build`.

See [dotenv-extended](https://github.com/keithmorris/node-dotenv-extended) docs to learn more about how to set up `.env` and other related files.

### Env scoping
If you use `yarn workspaces`, you may use separate `.env` (and `.env.defaults`) files for each workspace while also keeping the variables from
the project root's `.env` file.
The environment variables deeper in the directory tree have precedence.

For example, if you have the following project structure:
```
- workspaces
   - package1
      • .env
      • package.json
   - package2
      • package.json
• .env
• package.json
```
And following .env files contents:
```
# .env
FOO=original
```
```
# workspaces/package1/.env
FOO=overwritten
```

You can expect following behavior when running scripts from package.json:
```
yarn script-that-prints-processEnvFOO                    # 'original'
yarn workspace package1 script-that-prints-processEnvFOO # 'overwritten'
yarn workspace package2 script-that-prints-processEnvFOO # 'original'
```

You can think of it as of multiple `.gitignore` files on different levels of directory tree.

Multiple levels of workspace nesting is also supported (i.e. when your workspace package also has workspaces inside it, the .env
files on different levels will be resolved following the rules above).
