// JavaScript source code
let SLAdult;
let SLChild;
let ticketCost;
let foriegnAdult;
let foriegnChild;
let Infant;
let duration;
let durationCost;
let totalDurationCost;
let currentCost;
let overallCost;
let totalNumberOfTickets;
let overallNumberOfTickets;
let fullName;
let favorite;
let favoriteCost;
let favoriteDurationCost;
let favoriteTotDuration;

const theForm = document.getElementById("ticketBookingForm");
const visit_Date = document.getElementById("visitDate");
const valid_Date_message = document.getElementById("dateValidation")
const full_Name = document.getElementById("fullName");
const validate_Name = document.getElementById("nameValidity");
const mobile_Number = document.getElementById("mobileNumber");
const user_email = document.getElementById("email");
const confirm_user_email = document.getElementById("confirmEmail");
const select_Gender = document.getElementById("gender");
const verify_message = document.getElementById("verify");
const verify1_message1 = document.getElementById("verify1");
const SL_Adult = document.getElementById("SLadult");
const SL_Child = document.getElementById("SLchild");
const foriegn_Adult = document.getElementById("foriegnAdult");
const foriegn_Child = document.getElementById("foriegnChild");
const infants = document.getElementById("infant");
const current_Order = document.getElementById("currentOrder");
const current_duration = document.getElementById("currentDuration");
const Tickets = document.getElementsByName("numOfTickets");
const select_Duration = document.getElementById("duration");
const current_Order_table = document.getElementById("currentAmt");
const btnAddToOrder = document.getElementById("addOrder");
const add_To_favorites_btn = document.getElementById("addToFavorite");
const order_favorites_btn = document.getElementById("orderFavorite");
const check_loyalty_points = document.getElementById("loyaltyPoints");
const validate_Order = document.getElementById("orderValidation");
const overall_Order = document.getElementById("overallOrder");
const total_Num_of_Items = document.getElementById("totNumOfItems");
const place_Order_Btn = document.getElementById("placeOrder");

window.addEventListener("load", init);
visit_Date.addEventListener("change", user_Details);
full_Name.addEventListener("change", user_Details);
confirm_user_email.addEventListener("change", user_Details);
SL_Adult.addEventListener("change", calculateCost);
SL_Child.addEventListener("change", calculateCost);
foriegn_Adult.addEventListener("change", calculateCost);
foriegn_Child.addEventListener("change", calculateCost);
infants.addEventListener("change", calculateCost);
select_Duration.addEventListener("change", calculateCost);
Tickets.forEach(item => item.addEventListener("change", calculateCost));
btnAddToOrder.addEventListener("click", output_Overall_Order);
add_To_favorites_btn.addEventListener("click", addFavorite);
order_favorites_btn.addEventListener("click", OrderFavorite);
check_loyalty_points.addEventListener("click", checkLoyalty);
place_Order_Btn.addEventListener("click", placeOrder);

function init() {
    SLAdult = 0;
    SLChild = 0;
    foriegnAdult = 0;
    foriegnChild = 0;
    Infant = 0;
    ticketCost = 0;
    duration = "3 hours";
    durationCost = 0;
    currentCost = 0;
    totalNumberOfTickets = 0;
    overallNumberOfTickets = 0;
    overallCost = 0;
    fullName = " ";
    favoriteCost = 0;
    favoriteDurationCost = 0;
    totalDurationCost = 0;
    favoriteTotDuration = 0;
 }

function user_Details() {
    if (theForm.checkValidity()) {
        event.preventDefault();

        total_Num_of_Items.innerText = null;

        const date = new Date();
        let year = date.getFullYear();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let validVisitDate = visit_Date.value;
        let myArray = validVisitDate.split("-");
        console.log(myArray);
        if ((myArray[0] > year) || ((myArray[0] = year) && (myArray[1] >= month) && (myArray[2] > day)) ){
            valid_Date_message.innerText = null;
        }
       
        else {
            visit_Date.value = date;
            valid_Date_message.innerText = "Invalid Date, date has already passed";
        }
       
        email = user_email.value;
        confirmEmail = confirm_user_email.value;
        if (email != confirmEmail) {

            verify_message.innerText = `The Email Confirmation does not match`;
            verify1_message1.innerText = `The Email Confirmation does not match`;
            user_email.value = null;
            confirm_user_email.value = null;

        }
        else {
            verify_message.innerText = null;
            verify1_message1.innerText = null;
        }


    }
    
   
}

function calculateCost() {
  
        event.preventDefault();
        SLAdult = parseInt(SL_Adult.value);
        SLChild = parseInt(SL_Child.value);
        foriegnChild = parseInt(foriegn_Child.value);
        foriegnAdult = parseInt(foriegn_Adult.value);
        Infant = parseInt(infants.value);
        totalNumberOfTickets = SLAdult + SLChild + foriegnChild + foriegnAdult + Infant;
        ticketCost = (foriegnAdult * 5500) + (foriegnChild * 2700) + (SLChild * 700) + (SLAdult * 1200);
        console.log(ticketCost);
        current_Order.innerText = `Current Cost: LKR ${ticketCost.toFixed(2)}`;
        validate_Order.innerText = null;



        Tickets[0].innerText = SLAdult;
        Tickets[1].innerText = SLChild;
        Tickets[2].innerText = foriegnAdult;
        Tickets[3].innerText = foriegnChild;
        Tickets[4].innerText = Infant;

        duration = select_Duration.value;
        current_duration.innerText = duration;
        totalDurationCost = 0;
        console.log(duration);
        if (duration == "3 Hours") {
            if (SLAdult >= 0 || SLChild >= 0 || foriegnAdult > 0 || foriegnChild > 0) {
                durationCost = 0;
                totalDurationCost = totalDurationCost + durationCost;
            }
        }
        else if (duration == "Half Day") {
            if (SLAdult >= 0 || SLChild >= 0) {
                durationCost = (SLAdult + SLChild) * 350;
                totalDurationCost = totalDurationCost + durationCost;

            }
            if (foriegnAdult >= 0 || foriegnChild >= 0) {
                durationCost = (foriegnAdult + foriegnChild) * 450;
                totalDurationCost = totalDurationCost + durationCost;
            }
        }
        else if (duration == "Full Day") {
            if (SLAdult >= 0 || SLChild >= 0) {
                durationCost = (SLAdult + SLChild) * 600;
                totalDurationCost = totalDurationCost + durationCost;
            }
            if (foriegnAdult >= 0 || foriegnChild >= 0) {
                durationCost = (foriegnAdult + foriegnChild) * 800;
                totalDurationCost = totalDurationCost + durationCost;
            }
        }
      
        currentCost = ticketCost + totalDurationCost;
        current_Order.innerText = `Current Cost: LKR ${currentCost.toFixed(2)}`
    
}

function addFavorite() {
  
    let favorite = {
        SL_Adult_Ticket: 0,
        SL_Child_Ticket: 0,
        foriegn_Adult_Ticket: 0,
        foriegn_Child_Ticket: 0,
        infant_Ticket: 0,
        duration: "3 hours"

    }
    favorite.SL_Adult_Ticket = SLAdult;
    favorite.SL_Child_Ticket = SLChild;
    favorite.foriegn_Adult_Ticket = foriegnAdult;
    favorite.foriegn_Child_Ticket = foriegnChild;
    favorite.infant_Ticket = Infant;
    favorite.duration = duration;
 
    if (totalNumberOfTickets > 0) {
        strFavorite = JSON.stringify(favorite);
        console.log(strFavorite);
        localStorage.setItem("newFavorite", strFavorite);
        alert("Order has been stored as favorite");
    }
    else {
        validate_Order.innerText = `Please select at least one ticket to add to favorites*`;
        current_Order.innerText = null;
    }
}


function OrderFavorite() {
    SL_Adult.value = 0;
    SL_Child.value = 0;
    foriegn_Adult.value = 0;
    foriegn_Child.value = 0;
    infant.value = 0;

    let newFavoriteObj = JSON.parse(localStorage.getItem("newFavorite"));
    favoriteCost = (newFavoriteObj.SL_Adult_Ticket * 1200) + (newFavoriteObj.SL_Child_Ticket * 700) + (newFavoriteObj.foriegn_Child_Ticket * 2700) + (newFavoriteObj.foriegn_Adult_Ticket * 5500);
    let favDuration = newFavoriteObj.duration;
    console.log(favDuration);
    if (favDuration == "3 Hours") {
        favoriteDurationCost = 0;
        favoriteTotDuration = favoriteTotDuration + favoriteDurationCost;
      
    }
    if (favDuration == "Half Day") {
        if (newFavoriteObj.SL_Adult_Ticket >= 0 || newFavoriteObj.SL_Child_Ticket >= 0) {
            favoriteDurationCost = (newFavoriteObj.SL_Adult_Ticket + newFavoriteObj.SL_Child_Ticket) * 350
            favoriteTotDuration = favoriteTotDuration + favoriteDurationCost;
            
        }
        if (newFavoriteObj.foriegn_Adult_Ticket >= 0 || newFavoriteObj.foriegn_Child_Ticket >= 0) {
            favoriteDurationCost = (newFavoriteObj.foriegn_Adult_Ticket + newFavoriteObj.foriegn_Child_Ticket) * 450
            favoriteTotDuration = favoriteTotDuration + favoriteDurationCost;
        }

    }
    if (favDuration == "Full Day") {
        if (newFavoriteObj.SL_Adult_Ticket >= 0 || newFavoriteObj.SL_Child_Ticket >= 0) {
            favoriteDurationCost = (newFavoriteObj.SL_Adult_Ticket + newFavoriteObj.SL_Child_Ticket) * 600
            favoriteTotDuration = favoriteTotDuration + favoriteDurationCost;
        }
        if (newFavoriteObj.foriegn_Adult_Ticket >= 0 || newFavoriteObj.foriegn_Child_Ticket >= 0) {
            favoriteDurationCost = (newFavoriteObj.foriegn_Adult_Ticket + newFavoriteObj.foriegn_Child_Ticket) * 800
            favoriteTotDuration = favoriteTotDuration + favoriteDurationCost;
        }
    }
        
    
    let checkZeroItems = newFavoriteObj.SL_Adult_Ticket + newFavoriteObj.foriegn_Adult_Ticket + newFavoriteObj.foriegn_Child_Ticket + newFavoriteObj.SL_Child_Ticket + newFavoriteObj.infant_Ticket;
    if (checkZeroItems != 0) {
        total_Num_of_Items.innerText = `${total_Num_of_Items.innerText} \n SL Adult Ticket: ${newFavoriteObj.SL_Adult_Ticket} \n SL Child Ticket:${newFavoriteObj.SL_Child_Ticket} \n Foriegn Adult Ticket:${newFavoriteObj.foriegn_Adult_Ticket} \n Foriegn Child Ticket:${newFavoriteObj.foriegn_Child_Ticket} \n Infant Ticket: ${newFavoriteObj.infant_Ticket} \n Duration: ${newFavoriteObj.duration} \n- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`;
        overallCost = overallCost + favoriteCost + favoriteTotDuration;
        overall_Order.innerText = `Overall Cost: LKR ${overallCost.toFixed(2)}`;
    }
    else {
        validate_Order.innerText = `Select at least one ticket and click "Add to Favorites" to order favorite*`;
        current_Order.innerText = null;
    }
    if (overallCost == 0) {
        overallCost = overallCost + favoriteCost + favoriteTotDuration;
        overall_Order.innerText = `Overall Cost: LKR ${overallCost.toFixed(2)}`;
    }
   
   
    overallNumberOfTickets = overallNumberOfTickets+ checkZeroItems;
    console.log(overallNumberOfTickets);
    
}

function output_Overall_Order() {
    event.preventDefault();
    SL_Adult.value = 0;
    SL_Child.value = 0;
    foriegn_Adult.value = 0;
    foriegn_Child.value = 0;
    infant.value = 0;

    for (i = 0; i < Tickets.length; i++) {
        Tickets[i].innerText = 0;
    }

    current_duration.innerText = `3 Hours`;
    current_Order.innerText = `Current Cost: LKR ${(0).toFixed(2)}`;

    if (overallNumberOfTickets == 0) {//it starts here//

        overallCost = overallCost + currentCost;

        overall_Order.innerText = `Overall Cost: LKR ${overallCost.toFixed(2)}`;

        if (totalNumberOfTickets > 0) {

            total_Num_of_Items.innerText = `${total_Num_of_Items.innerText} \n SL Adult Ticket: ${SLAdult} \n SL Child Ticket:${SLChild} \n Foriegn Adult Ticket:${foriegnAdult} \n Foriegn Child Ticket:${foriegnChild} \n Infant: ${Infant}\n Duration: ${duration}\n - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -  `;

        }
        else {
            validate_Order.innerText = `Please Select At Least One Ticket to add to order*`;
            current_Order.innerText = null;
        }
        overallNumberOfTickets = overallNumberOfTickets + (SLAdult + SLChild + foriegnAdult + foriegnChild + Infant);
    }
    else {
        alert("Please select Your Tickets");
    }
}


function checkLoyalty() {
 
    if (overallNumberOfTickets > 3) {
        let numberOfLoyaltyPoints = overallNumberOfTickets * 15;
        localStorage.setItem("Loyalty Points", numberOfLoyaltyPoints);
        let loyalty = localStorage.getItem("Loyalty Points");
        console.log(numberOfLoyaltyPoints);
        alert(`You currently have ${loyalty} loyalty points!`)

    }
    else {
        alert(`You must have more than 3 items in your order to recieve loyalt points!`)
    }

}

function placeOrder() {
    if (theForm.checkValidity()) {
        event.preventDefault();
        if (overallCost > 0) {

            alert(`Order is successful! Enjoy your visit to the Ceylon Tea Museum!`);
            overall_Order.innerText = `Overall Cost: LKR 0.00`;
            total_Num_of_Items.innerText = " ";
        }
        else {
            alert(`Please order tickets for transaction to take place`);
        }
    }
}


