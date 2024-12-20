// const shipName = prompt("Enter your ship name")
// console.log(shipName);
const alienAccuracy = getRandomNumber(.6, .8);
const alienFirpower = getRandomNumber(2, 4);
const alienHull = getRandomNumber(3, 6);


let userShip = {
    name: "Aster",
    hull: 20,
    firepower: 5,
    accuracy: .7,
};

let alienShip = {
    hull: alienHull,
    firepower: alienFirpower,
    accuracy: alienAccuracy
};

//userShip = {name: shipName}
function getRandomNumber (min, max){
    return (Math.random() * (max - min) + min);
}
    

//console.log(userShip);
console.log(alienShip);
//console.log(accuracy);