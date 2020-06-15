// Read Files
const decoder = new TextDecoder('utf-8')

const data = await Deno.readFile('readme.txt'); // Deno lets us use await without an async function; Top level await
console.log(decoder.decode(data))

// Write Files
const encoder = new TextEncoder()

const text = encoder.encode('Hello Again, Bruski')
await Deno.writeFile('readme.txt', text)


// Rename and Remove Files

await Deno.rename('readme.txt', 'deleteme.txt')