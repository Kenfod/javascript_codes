// .checked = Is aproperty that determines the checked state of an HTML checkbox or radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mpesaBtn = document.getElementById("mpesaBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You have subscribed,Thank you!`;

        if(visaBtn.checked){
            payResult.textContent = `You are paying with VISA CARD!`
        }

        else if(masterBtn.checked){
            payResult.textContent = `You are paying with  MASTERCARD!`
        }

        else if(payPalBtn.checked){
            payResult.textContent = `You are paying with  PayPal!`
        }

        else if(mpesaBtn.checked){
            payResult.textContent = `You are paying with  M-PESA!`
        }

        else{
            payResult.textContent = `Kindly select mode of payment!`
        }        
    }
    else{
        subResult.textContent = `You have NOT subscribed, kindly subsribe first!`;
    }
}
