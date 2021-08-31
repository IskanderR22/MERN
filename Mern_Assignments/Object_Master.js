

const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// filter takes in an anonymous function Ex pokemon => pokemon.id % 3 === 0);
const divisbleBy3 = pokémon.filter( pokemon => pokemon.id % 3 === 0); 
console.log(divisbleBy3);

const isFire = pokémon.filter( pokemon => pokemon.types.includes("fire")); // Going into the pokemon object and checking to see if the key "type" includes "fire"
console.log(isFire);

const manyTypes = pokémon.filter( pokemon => pokemon.types.length > 1); 
console.log(manyTypes);

const pokemonNames = pokémon.map( pokemon => pokemon.name); // Using the map array method and storing it in a variable to only display the pokemon names
console.log(pokemonNames);

const namesOver99 = pokémon.filter( pokemon => pokemon.id > 99).map(pokemon => pokemon.name); // filtering the data first and then mapping it to a variable to display names
console.log(namesOver99);

const onlyPoisen = pokémon.filter ( pokemon => pokemon.types.length == 1).filter( pokemon => pokemon.types.includes("poison"));
console.log(onlyPoisen);

const secondFlying = pokémon.filter ( pokemon => pokemon.types.length > 1).filter( pokemon => pokemon.types.includes("flying"));
console.log(secondFlying);

const normalCount = pokémon.filter( pokemon => pokemon.types.includes("fire")).length + 1;
console.log(normalCount);
