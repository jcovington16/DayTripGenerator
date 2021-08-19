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

    return `Your destination: ${randomDest}, Your resturant: ${randomResturant}, Your transportation: ${randomTrans}, Your enterainment: ${randomEnt}`;
}

// function to display items to the DOM
function displaySelections() {
    let items = randomSelection(vacation);

    let display = document.getElementById('vacation');
    display.innerHTML = items;

    
}

displaySelections();