function jediName(firstName,lastName){
    let smashName = lastName.slice(0,3)+firstName.slice(0,3)
    return `${smashName}`
}
console.log(jediName("Jeffrey","Vega"))

