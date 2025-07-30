// Fetch Function   = is used  for making HTTP requests to fetch resources such aas JSON style data, images, files etc.
//                    It simplifies asynchronous data fetching in Javascript and used for interacting with APIs to retrieve and send data asynchronously over the web.
//          syntax = fetch(url, {options})
//                   fetch(url, {method: "GET"}) - get a resource
//                   fetch(url, {method: "POST"}) - send some data
//                   fetch(url, {method: "PUT"}) - replace some data
//                   fetch(url, {method: "DELETE"}) - delete some data


// fetchData();

async function fetchData(){
    
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
