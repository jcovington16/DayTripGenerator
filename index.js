// created an object to initialize my variables 
let vacation = {
    destination: ['Japan', 'Ireland', 'Spain', 'Tahiti'],
    resturant: ['Asian', 'Southern', 'Spanish', 'BBQ'],
    transportation: ['Bus', 'Uber', 'Bike', 'Plane'],
    entertainment: ['Sports', 'Music', 'Video Games', 'Live Play']
}

// function to randomly select all 4 items to the user
function randomSelection(obj) {
    const randomIndex = Math.floor(Math.random() * obj.destination.length)

    const randomDest = obj.destination[randomIndex];
    const randomResturant = obj.resturant[randomIndex];
    const randomTrans = obj.transportation[randomIndex];
    const randomEnt = obj.entertainment[randomIndex];

    const randomItems = `Your destination: ${randomDest}, Your resturant: ${randomResturant}, Your transportation: ${randomTrans}, Your enterainment: ${randomEnt}`

    return randomItems;
}

let randomObj = randomSelection(vacation);

// function to display items to the DOM
function displaySelections(obj) {

    let display = document.getElementById('vacation');
    display.innerHTML = obj;

}
displaySelections(randomObj);

function getAnswer(obj){ 
    let question = "Are you satisfied with your trip?";
    let decision = document.getElementById('decision');
    decision.innerHTML = question; 

    let btn1 = document.createElement("BUTTON");
    let btn2 = document.createElement("BUTTON");

    btn1.innerHTML = "Yes";
    btn2.innerHTML = "No";

    document.body.appendChild(btn1)
    document.body.appendChild(btn2)

    btn1.className = '.btn'
    btn2.className = '.btn'

    btn1.onclick = function(){
        yesButton(randomObj);
    };

    btn2.onclick = function() {
        noButton(randomObj);
    }

}
getAnswer(vacation);


// If user is satisfied, give trip complete message
function yesButton(obj) {
    let yesMessage = document.getElementById('yes_message');
    yesMessage.innerHTML = 'Your trip generator is complete. Enjoy!'
    console.log(obj)
}


// If user is not satisfied, regenerate the whole trip until they are satisfied. 
function noButton(){
    let newSelection = randomSelection(vacation);
    displaySelections(newSelection);
}