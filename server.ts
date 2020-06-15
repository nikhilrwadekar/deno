// Server (http module)
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({port: 3000})

console.log('Listening for requests on Port 3000')

// For loop for await (No limitter)
for await (const req of server) {
	const url = req.url;
	req.respond({body: `Hello There! You visited ${url}`})
}