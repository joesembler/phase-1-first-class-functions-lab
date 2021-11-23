// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    const FareMultipler = function (int, fare){
        fare = 1;
        fare = fare * int;
    }
    return FareMultipler;
}

function fareDoubler(fare){
    fare = fare * 2;
    return fare;
}

function fareTripler(fare){
    fare = fare * 3;
    return fare;
}

function selectDifferentDrivers (arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}