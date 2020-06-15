// API (ABC Module - Express)
import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import {get_all_books,get_book } from "./controllers/bookController.ts"
const app = new Application();


// Static Files (Block by default for security reasons)
app.static('/','./public');

// Routes
app.get('/', async (ctx: Context) => {
	await ctx.file('./public/index.html')
})

app
.get('/books', get_all_books)
.get('/book/:id', get_book)
.post('/books', () => {})
.delete('/books/:id', () => {})

// Listen to port
app.start({port: 3000});
