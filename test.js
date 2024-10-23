function kiloMeterToMiles (kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const convert = kiloMeterToMiles (4);
console.log(convert);