import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", async (api) => {
  console.log("hello world from api initializer!", api);

  const resp = await fetch('https://jsonplaceholder.typicode.com/todos');

  const data = await resp.json();

  console.log('data coming from jsonplace holder todo api', data);
});
