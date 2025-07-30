// Fetch Function   = is used  for making HTTP requests to fetch resources such aas JSON style data, images, files etc.
//                    It simplifies asynchronous data fetching in Javascript and used for interacting with APIs to retrieve and send data asynchronously over the web.
//          syntax = fetch(url, {options})
//                   fetch(url, {method: "GET"}) - get a resource
//                   fetch(url, {method: "POST"}) - send some data
//                   fetch(url, {method: "PUT"}) - replace some data
//                   fetch(url, {method: "DELETE"}) - delete some data


//  2. Fetch data using Async & Await:

fetchData();

async function fetchData() {
    
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data)
    }
    catch(error) {
        console.error(error);
    }
}




