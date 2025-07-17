// DICE ROLLER PROGRAM

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values =[];
    const images =[];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        // console.log(value);

        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }
    // console.log(values);

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');

}



// function convert(){

//     if(toFahrenheit.checked){
//         // result.textContent = "You selected to Fahrenheit";
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         // result.textContent = "You selected to Celsius";
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5 / 9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a unit";
//     }
// }
