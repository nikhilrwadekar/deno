// File System
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts"; //Unstable Packagee!

const jsonObj = await readJson('random.json');
console.log(jsonObj);

const books = [
	{title: "Title One", author: "Nikhil Wadekar"},
	{title: "Name of the Wind", author: "Shaun"}
]

await writeJson('books.json', books, {spaces: 2});
console.log("Created books.json")
