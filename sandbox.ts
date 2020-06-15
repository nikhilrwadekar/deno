const decoder = new TextDecoder('utf-8')

const data = await Deno.readFile('readme.txt'); // Deno lets us use await without an async function; Top level await
console.log(decoder.decode(data))
