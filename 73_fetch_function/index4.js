// Fetch Function   = is used  for making HTTP requests to fetch resources such aas JSON style data, images, files etc.
//                    It simplifies asynchronous data fetching in Javascript and used for interacting with APIs to retrieve and send data asynchronously over the web.
//          syntax = fetch(url, {options})
//                   fetch(url, {method: "GET"}) - get a resource
//                   fetch(url, {method: "POST"}) - send some data
//                   fetch(url, {method: "PUT"}) - replace some data
//                   fetch(url, {method: "DELETE"}) - delete some data


// This function runs when the page loads to populate the dropdown suggestions
async function populatePokemonList() {
    try {
        // Fetch a list of all Pokémon (limit is set high to get all of them)
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500");

        if (!response.ok) {
            throw new Error("Could not fetch the Pokémon list");
        }

        const data = await response.json();
        const pokemonList = document.getElementById("pokemonList");

        // Create an <option> for each Pokémon and add it to the datalist
        data.results.forEach(pokemon => {
            const option = document.createElement("option");
            option.value = pokemon.name;
            pokemonList.appendChild(option);
        });

    } catch (error) {
        console.error(error);
    }
}

// Main function to fetch data for the selected Pokémon
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        // The URL string must be wrapped in backticks (`)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource. Check the Pokémon name.");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}

// Call the function to populate the list when the script loads
populatePokemonList();
