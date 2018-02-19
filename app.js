function jediName(firstName,lastName){
    let smashName = lastName.slice(0,3)+firstName.slice(0,3)
    return `${smashName}`
}
console.log(jediName("Jeffrey","Vega"))

function beyond(num){
if(Infinity=== num ){
    console.log("and beyond")
}
if(0===num){
    console.log("staying Home")
}
}
// var x = beyond(0)
// console.log(beyond(0))