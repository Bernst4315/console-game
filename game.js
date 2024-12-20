const shipName = prompt("Enter your ship name")
console.log(shipName);

let userShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
};

userShip = {name: shipName}

console.log(userShip);