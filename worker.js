export default {
  fetch: async (request) => {
    console.log(`worker request ${request.url}`, `"${await request.text()}"`)

    return new Response("hello")
  },
}
