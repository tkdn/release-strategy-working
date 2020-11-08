import "whatwg-fetch"
import { foo } from "./another"

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json, foo))
