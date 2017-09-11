/**
/**
 * NOTES:
 * Do not forget to insert RETURN statement, if needed!
 * Please use the following functions primarily and if needed all the other array functions
 *
 * - Array.prototpye.forEach(fn)
 * - Array.prototpye.find(fn)
 * - Array.prototpye.filter(fn)
 * - Array.prototpye.map(fn)
 * - Array.prototpye.reduce(fn)
 * - Array.prototpye.every(fn)
 * - Array.prototpye.some(fn)
 * - ...
 *
 *  Remember:
 *  () => {}  // this is an arrow function, basically a short form of function decleration.
 *  let       // this is another reserved for declaring variables like "var" which beawares of scopes!
 *  const     // this is an alternative way of declaring variables which does not allowed reference changes
 *
 * Note that:
 * - In the function paramter list the parameters are prefixed with "p" like "pPassengers"
 * - The decleration order of functions is not important!
 */



function findNumberOfPassengers(pPassengers){
    return pPassengers.length;  
}

function findPersonByIndex(pPassengers, pIndex){
    return pPassengers[pIndex - 1].firstname;
}

function findNumberOfWomen(pPassengers){
    return pPassengers.filter(person => person.gender === "F" ).length;
}

function findNumberOfMen(pPassengers){
    return pPassengers.filter(person => person.gender === "M" ).length;
}

function findPersonByTicketId(pPassengers, pId){
    return pPassengers.find(person => person.id == pId).lastname;
}

function findPassengersWithNoChildren(pPassengers){
    return pPassengers.filter(person => person.children.length == 0).length;
}

function findUnderagePassengers(pPassengers){
    return pPassengers.filter(person => person.birth.getFullYear() > 1999).length;
}
