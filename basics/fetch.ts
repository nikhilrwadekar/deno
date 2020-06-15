// Fetch API
const res = await fetch('https://swapi.dev/api/films/');
const apiData = await res.json();

console.log(apiData);