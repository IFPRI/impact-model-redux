# IFPRI IMPACT Model website

A narrative-driven site for sharing the results of IFPRI IMPACT model runs, which seek to consider the long term challenges facing policymakers in reducing hunger and poverty in a sustainable fashion.

## Development environment
To set up the development environment for this website, you'll need to install the following on your system:

- Node (v6.x) & Npm ([nvm](https://github.com/creationix/nvm) usage is advised)
- [jq](https://stedolan.github.io/jq/download/)

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```

### Getting started

To run the site locally:
```
$ npm run serve
```

The will compile the sass files, javascript, and launch the server making the site available at `http://localhost:3000/`.
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

### Compiling/Building

To build the site once (rather than continuously):

```
$ npm run build
```
