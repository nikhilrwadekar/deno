# Deno Basics w/ TypeScript

## What is Deno
Runtime by the same guy who made NodeJS. A younger brother or sister of sorts to NodeJS, and no, NOT a replacement!

## Features
* TS Support out of the box
* Secure by default (Needs permissions to: Read/Write files) (Permissions at https://deno.land/manual/getting_started/permissions)
* Packages installed via imports, NOT npm!

* Run files from the web

## Installation

```brew install deno```

## Run App w/ Denon

```deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon/denon.ts```

## Endpoints

1. GET: /books
2. GET: /book/:id
3. POST: /books/
4. DELETE: /books/:id
