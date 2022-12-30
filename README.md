# VPC issue with Vite v3 + a custom server

```
➜  vpc-test git:(main) ✗ npm run dev

> vpc-test@0.0.0 dev
> tsx server.ts

[mf:dbg] Initialising worker...
ReferenceError: Cannot access 'seenIds' before initialization
    at Object.delayDepsOptimizerUntil (file:///Users/alexturpin/src/vpc-test/node_modules/vite/dist/node/chunks/dep-5605cfa4.js:41492:55)
    at doTransform (file:///Users/alexturpin/src/vpc-test/node_modules/vite/dist/node/chunks/dep-5605cfa4.js:36846:36)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
```
