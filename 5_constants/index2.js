const P2 = 3.14159;
let rad;
let circum;

document.getElementById("myCalc").onclick =function(){
    rad = document.getElementById("myText").value;
    rad = Number(rad);
    circum = 2 * P2 * rad;
    document.getElementById("myH3").textContent =circum;
}
