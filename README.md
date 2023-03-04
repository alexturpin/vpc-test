# VPC issue with POST bodies

`npm run dev` to run it through VPC. Then make a POST request against it with a body, and notice the empty body in the server console.

```
fetch("/test", {
    method: "POST",
    body: "test",
})
```

This however, works fine when running directly through Miniflare with `npm run mf`.
