# VPC issue with Vite v4 + React plugin

```
➜  vpc-test git:(main) ✗ npm run dev

> vpc-test@0.0.0 dev
> vite dev

error when starting dev server:
TypeError: esbuild.context is not a function
    at build (file:///Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/dist/vite.js:112:48)
    at configureServer (file:///Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/dist/vite.js:141:51)
    at createServer (file:///Users/alexturpin/src/vpc-test/node_modules/vite/dist/node/chunks/dep-0bae2027.js:61059:30)
    at async CAC.<anonymous> (file:///Users/alexturpin/src/vpc-test/node_modules/vite/dist/node/cli.js:729:24)
```
