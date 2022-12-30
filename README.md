# VPC issue with Vite v4 + React plugin

```
➜  vpc-test git:(main) ✗ npm run dev

> vpc-test@0.0.0 dev
> vite dev

✘ [ERROR] Invalid option in build() call: "jsxSideEffects"

    /Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:244:12:
      244 │       throw new Error(`Invalid option ${where}: "${key}"`);
          ╵             ^

    at checkForInvalidFlags (/Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:244:13)
    at flagsForBuildOptions (/Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:435:3)
    at buildOrServeContinue (/Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:1228:9)
    at /Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:1155:15

error when starting dev server:
Error: Build failed with 1 error:
/Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:244:12: ERROR: Invalid option in build() call: "jsxSideEffects"
    at failureErrorWithLog (/Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:1624:15)
    at /Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:1143:18
    at /Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:1138:9
    at /Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:678:9
    at handleIncomingPacket (/Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:775:9)
    at Socket.readFromStdout (/Users/alexturpin/src/vpc-test/node_modules/vite-plugin-cloudflare/node_modules/esbuild/lib/main.js:644:7)
    at Socket.emit (node:events:527:28)
    at Socket.emit (node:domain:475:12)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
```
