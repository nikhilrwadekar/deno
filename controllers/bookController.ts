import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { Book } from "../models/bookModel.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let books: Book[] = [
  { id: "1", title: "Title Onne", author: "Author One", pages: 10 },
  { id: "2", title: "Title Two", author: "Author Two", pages: 10 },
  { id: "3", title: "Title Three", author: "Author Three", pages: 10 },
  { id: "4", title: "Title Four", author: "Author Four", pages: 10 },
];

export const get_all_books = (ctx: Context) => {
  return ctx.json(books, 200);
};

export const get_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((book: Book) => id == book.id);

  // If Book found
  if (book) {
    return ctx.json(book);
  }

  return ctx.string("No book found with that ID", 404);
};

export const create_book = async (ctx: Context) => {
  const { title, author, pages } = await ctx.body();

	// Validate Data
	const id = v4.generate();
	const book = {id, title, author, pages};

	books.push(book);

	return ctx.json(book, 201); // Successfully created resource (Book)
};

export const delete_book = (ctx: Context) => {
	const { id } = ctx.params;
	const book = books.find((book: Book) => id == book.id);
	
	// If Book found
  if (book) {
		books = books.filter((book: Book) => id != book.id);
		return ctx.json(book, 200)
  }

  return ctx.string("No book found with that ID", 404);
};
