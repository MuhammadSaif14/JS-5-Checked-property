// .checked = property that determines the checked state of an
//                    HTML checkbox or radio button element.

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const PaypalBtn = document.getElementById('PaypalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = 'You are subscribed!';
    }else{
        subResult.textContent = 'You are NOT subscribed!';
    }

    if(visaBtn.checked){
        paymentResult.textContent = 'You are paying with VISA!';
    }else if(masterCardBtn.checked){
        paymentResult.textContent = 'You are paying with Master Card!';
    }else if(PaypalBtn.checked){
        paymentResult.textContent = 'You are paying with PayPal!';
    }else{
        paymentResult.textContent = 'Kindly select any one payment method!';
    }
}

