# more-hooks

This is the development environment for the node module [@asmundwien/more-hooks](https://www.npmjs.com/package/@asmundwien/more-hooks).
The module is a collection of usefull react hooks. For a detailed package description, see the [documentation on NPM](https://www.npmjs.com/package/@asmundwien/more-hooks).

## Repo description

This repo consists of two react projects:

### more-hooks

The project in which the node module is developed, bundled and published to NPM.

### more-hooks-testing

Documentation and implementation testing of `more-hooks`. The project implements the `more-hooks` package via symlinks.

#### Setup the test environment

1. Within the `more-hooks` project, run `$ yarn link` within the following paths:
   - `.`
   - `./node_modules/react`
   - `./node_modules/react-dom`
2. Within the `more-hooks-testing` project, run:
   - `yarn link @asmundwien/more-hooks`
   - `yarn link react`
   - `yarn link react-dom`
3. Now, every time `more-hooks` is bundled anew (`$ yarn build`), the changes will immediately be reflected in the `more-hooks-testing` environment.

For further reading on symlinks, see [yarn link](https://classic.yarnpkg.com/en/docs/cli/link).
