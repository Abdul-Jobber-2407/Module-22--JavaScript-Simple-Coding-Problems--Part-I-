function isLeapYear(year){
    if(year % 100 === 0 && year % 4 === 0 ){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap = isLeapYear (2024);
console.log(isLeap);