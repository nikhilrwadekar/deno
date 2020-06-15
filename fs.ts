// File System
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts"; //Unstable Packagee!

const jsonObj = await readJson('random.json');
console.log(jsonObj);
