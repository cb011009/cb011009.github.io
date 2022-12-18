// JavaScript source code
let amount;
let cardOwnerName;
let cardExpDate;
let checkExpired;

const donation_Form = document.getElementById("donationForm");
const txtamount = document.getElementsByName("amount");
const txtdonation_Amount = document.getElementById("donatedAmount");
const name = document.getElementById("name");
const exp_Date = document.getElementById("expDate");
const card_Number = document.getElementById("cardNumber");
const cvc_cvv_Number = document.getElementById("cvc");
const validation_message = document.getElementsByName("validation");
const confirm_Payment = document.getElementById("confirmPayment");
const confirmation_Message = document.getElementById("confirmationMessage");
const detect_Invalid = document.getElementById("nullAmount");
const detect_Invalid_Amount = document.getElementById("amountError");

window.addEventListener("load", init);
exp_Date.addEventListener("change", validate);
txtamount.forEach(item1 => item1.addEventListener("click", checkAmount));
confirm_Payment.addEventListener("click", validate);



function init() {
    amount = 0;
    cardOwnerName = " ";
    cardExpDate = " ";
    checkExpired = false;
}

function checkAmount() {
    event.preventDefault();
    if (checkExpired != false) {
        switch (this.value) {
            case "LKR 100.00":
                amount = 100.00;

                break;
            case "LKR 500.00":
                amount = 500.00;

                break;
            case "LKR 1000.00":
                amount = 1000.00;

                break;
            case "LKR 2000.00":
                amount = 2000.00;

                break;
            case "LKR 5000.00":
                amount = 5000.00;

                break;
            case "LKR 10000.00":
                amount = 10000.00;
        }
        detect_Invalid_Amount.innerText = null;
        txtdonation_Amount.innerText = `You have selected : LKR ${amount.toFixed(2)}`;
    }
    else {
      
        alert("Invalid Card! Cannot Select Amount to Donate!");
        txtdonation_Amount.innerText =null;
    }
}

function validate() {
    if (donation_Form.checkValidity()) {
        event.preventDefault();
        cardOwnerName = name.value;

        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        cardExpDate = exp_Date.value;
        let myArray1 = cardExpDate.split("-");
        if (myArray1[0] > year) {
            validation_message[2].innerText = null;
            checkExpired = true;
        }
        else if (myArray1[0] == year) {
            if (myArray1[1] > month) {
                validation_message[2].innerText = null;
                checkExpired = true;
                }
            else {
                validation_message[2].innerText = "Card is expired";
                detect_Invalid.innerText = "Cannot Donate Amount as your card is Invalid!";
             }
        }
        else {
            validation_message[2].innerText = "Card is expired";
        }
        console.log(checkExpired);
        if (checkExpired == true) {
            if (txtdonation_Amount.innerText.length == 0) {
                console.log("true");
                detect_Invalid.innerText = null;
                detect_Invalid_Amount.innerText = `Please Select Amount to Donate`;
            }
            if (amount > 0) {
                alert(`You have successfully donated LKR ${amount.toFixed(2)}.Thankyou!`);
                txtdonation_Amount.innerText = " ";
                name.value = " ";
                exp_Date.value = " ";
                card_Number.value = " ";
                cvc_cvv_Number.value = " ";
                detect_Invalid_Amount.innerText = " ";
            }
           
        }
        
       
    }
    
    
}

