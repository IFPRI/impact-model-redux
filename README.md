IFPRI IMPACT Model website

A narrative-driven site for sharing the results of IFPRI IMPACT model runs, which seek to consider the long term challenges facing policymakers in reducing hunger and poverty in a sustainable fashion.

## Development environment
To set up the development environment for this website, you'll need to install the following on your system:

- Node (v6.x) & Npm ([nvm](https://github.com/creationix/nvm) usage is advised)

> The versions mentioned are the ones used during development. It could work with newer ones.

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```

### Getting started

```
$ npm run serve
```
or
```
$ gulp serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

### Other commands
Compile the sass files, javascript... Use this instead of ```gulp serve``` if you don't want to watch.
```
$ npm run build
```
or
```
$ gulp
```
