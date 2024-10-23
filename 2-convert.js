// 12 inch 1 feet 

function inchToFeet(inch){
    const feet = inch/ 12;
    return feet ;
}
const jobbberHeight = inchToFeet(65);
// console.log(jobbberHeight);

//*************************************** */
// 75
function inchToFeet2(inch){
    const feetFraction = inch/ 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;

}
const jobbberHeight2 = inchToFeet2(75);
// console.log(jobbberHeight2);

/************************************************************* */

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const good = mileToKilometer (1);
console.log(good);

/****************************************** */

function kiloMeterToMiles (kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const convert = kiloMeterToMiles (4);
console.log(convert);