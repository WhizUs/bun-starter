# WhizUs bun-starter
Bun Typescript starter template

use with bun create:
```
bun create WhizUs/bun-starter
```

Optionally specify a name for the destination folder. If no destination is specified, the repo name will be used.
```
bun create WhizUs/bun-starter my-bun-project
```

## Features
- pre-configured lint and [editorconfig](https://editorconfig.org/)
  - eslint
    - with [ts-standard](https://github.com/standard/ts-standard) rules
    - and some custom rules
- pre-commit hook using [husky](https://typicode.github.io/husky/)
- [rtx](https://rtx.pub/) config
  - to get current version of bun automatically

## Contribute

### install dev runtimes

- use [rtx](https://rtx.pub/)
  - if it doesn't auto install bun and serverless run `rtx install`
- or install manually
  - [bun](https://bun.sh/)

### install dependencies

- run `bun install`

### try out the functions locally
- `bun dev` starts a local dev server in watch mode

### tests

Write all your tests in the folder `tests`.
There should be one testfile per `ts` file. A test file should be named like this: `<filename>.test.ts`.
The folder structure should be as in `src`.

- run all tests: `bun test`
- run all test in watch mode: `bun test-watch`
- run tests for a single test file: `bun test <filename incl path>`
- run tests for a single test file in watch mode: `bun test --watch <filename incl path>`

### commit

We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for our commit messages.

before you commit make sure you run and check following:
- `bun lint` - check code style (`bun lint-fix` to fix automatically)
- `bun ec` - check editorconfig
- `bun test` - check if your tests pass

### sign your commits

- [why?](https://dlorenc.medium.com/should-you-sign-git-commits-f068b07e1b1f)
- [how](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
  - [github](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
  - [gitlab](https://docs.gitlab.com/ee/user/project/repository/signed_commits/)
  - [1password](https://developer.1password.com/docs/ssh/git-commit-signing/)

## Dependencies

### [Bun](https://bun.sh/)

Super fast javascript runtime.

### [elysia](https://elysiajs.com/)

TypeScript framework supercharged by Bun with End-to-End Type Safety, unified type system and outstanding developer experience
