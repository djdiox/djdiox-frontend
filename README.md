# Diox Frontend 🚀 🦈

[![pipeline status](https://github.com/djdiox/djdiox-frontend/actions/workflows/node.js.yml/badge.svg)](https://github.com/djdiox/djdiox-frontend)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=my-website)](https://djdiox.github.io/djdiox-frontend/)
[![Version](https://img.shields.io/badge/Version-0.1.00-green.svg)](https://gitlab.com/djdiox/diox-website)

[![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](http://ForTheBadge.com)
[![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](http://ForTheBadge.com)
[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)
[![ForTheBadge makes-people-smile](http://ForTheBadge.com/images/badges/makes-people-smile.svg)](http://ForTheBadge.com)
[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://GitHub.com/Naereen/)

The page ist hosted on [GitLab](https://djdiox.github.io/djdiox-frontend/#/home) and built on Angular 6.

A new version is also available on [GitHub Pages](https://djdiox.github.io/djdiox-frontend/#/home)!
It will be soon available on a Web Server with an domain. Current Homepage is [https://djdiox.de](https://djdiox.de) hosted with wix.com

### Compatibility

This app is best compatible with Google Chrome or any other Chromium based browser.
It does also run on Mozilla Firefox, IE Edge und IE 10

# Development ⚒

This Frontend is currently standalone.
After it has been built it can be served by an HTTP Server e.g. [nginx](https://www.nginx.com/).

> _Tip:_ If you use an Backend like Express.JS you can serve the files with it, instead of using another server.

## Requirements 💊

You will need following tools to develop this project:

- [Node.JS LTS v8.11.1](https://nodejs.org)
- _preferred_ installing Node.JS via nvm for more details see [nvm for unix/osx](https://github.com/creationix/nvm) or [nvm for windows](https://github.com/coreybutler/nvm-windows)
- [Yarn v1.9.2](https://yarnpkg.com/lang/en/)
- [Vue CLI](https://cli.vuejs.org/)
- [Git (latest)](https://git-scm.com/)

1. Install all dependencies
2. Install dependencies with `yarn`.
3. Fill out needed informations in the environment.ts file.
4. Running `yarn serve` wil start up development server on [http://localhost:4200](http://localhost:4200).

> _Tip:_ If you want to access the project for instance on a smartphone or tablet in your network
> Usually eth0 is the default IP you need to call like `172.30.30.160:4200`

### Creating a new Patch / Version 💎

Running `yarn version --new-version patch / minor / major`
will create the semver version.

This cmd will update the version
located in the `package.json` and it will also generate tag in git.

For pushing the commit and the tags use `git push --follow-tags`.

> The execution of `git push --tags`
> will just push the tags and not the version in the `package.json`

Execute `yarn build` for a normal build into dist folder.

### Build 🛠️

Currently the automatic build is configured via `.github/workflows/node.js.yml`.

You can also run the build manually on your system with `yarn build`

This will take the base image with the dependency for a complete build:

Finally it builds all necessary files into `gh-pages` branch and delivers it as artifcats.
GitLab will store the artifacts for 14 days as Zip File in the Build of [GitlLab Actions0](https://github.com/djdiox/djdiox-frontend/actions).

## CI / CD 🥇

Continous Integration will be available over
[GitHub Actions](https://gitlab.com/djdiox/diox-website/-/jobs).
And will publish to GitLab Pages.

> All related scripts for the continous integration build can be found
> in the `\` folder

| Folder  | Description                                       |
| ------- | ------------------------------------------------- |
| base    | Base Dockerimage, that will be used for building. |
| prod    | Production buildscript and other files            |
| scripts | Other deployment tools, scripts etc.              |
| staging | Staging buildscript and other files               |

# About Vue 💥

Thd scaffold was generated with [Vue CLI](https://cli.vuejs.org/)

[Angular-CLI GitHub CvPage](https://cli.vuejs.org/)
