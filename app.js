function jediName(firstName,lastName){
    let smashName = lastName.slice(0,3)+firstName.slice(0,3)
    return `${smashName}`
}
console.log(jediName("Jeffrey","Vega"))

function beyond(num) {
    if(num === Infinity) {
        console.log('And Beyond');
		// return 'And Beyond';
    }
    if( Number.isFinite(num) && Math.sign(num) == 1) {
        console.log('To Infinity');
		// return 'To Infinity';
    }
    if( Number.isFinite(num) && Math.sign(num) == -1) {
        console.log('To Negative Infinity');
		// return 'To Negative Infinity';
    }
    if( num === 0 ) {
        console.log('Staying Home');
		// return 'Staying Home';
    }
}

function decode(str){
    var stringArray = str.split(' ');
    var decodedString = ' ';
    for(let i=0;i<stringArray.length;i++){
        if(stringArray[i][0]=='a'){
            decodedString += stringArray[i][1]
        }
        else if (stringArray[i][0]=='b'){
            decodedString += stringArray[i][2]
        }
        else if(stringArray[i][0]=='c'){
            decodedString += stringArray[i][3]
        }
        else if (stringArray[i][0]=='d'){
            decodedString += stringArray[i][4]
        }
        else{
            decodedString += ' ';
         } 
        }
       return decodedString;
    }

var x = "craft block argon meter bells brown croon droop";
console.log(decode(x))

function day(month,leapyear){
    var x = (leapyear % 100 === 0) ? (leapyear % 400 === 0) : (leapyear % 4 === 0)
    if(x === true && month ==="February"){
        return  `February has 29 days`
    }
    else if (x === false &&month ==="February"){
        return `February has 28 days`
    }
    if(month===" "){
        throw new Error("Must provide a valid month.")
        
    }
   var  y = month
    switch(y){
    case'January'|| 1:
    case 'March'||3:
    case' May' ||5:
    case'July'||7 :
    case'August'||8: 
    case'October'||10: 
    case'December'||12:
    console.log(`${month}  has 31 days`)
    break;
    case 'April'||4:
    case 'June'||6:
    case ' September'||9:
    case 'November'||11:
    console.log(`${month}  has 30 days`)
    break;
    }
    
    // February - 28 days in a common year and 29 days in leap years

}

console.log(day("January",2020))
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)+1);
  }
  
  var xy = getRandomInt(3)
function game(num1){
  if(xy === 1){
      return "rock"
  }
  else if (xy === 2){
      return "paper"
  }
  else if(xy === 3){
  return " scissors"
}
if(1 === 1){
    return "rock"
}
else if (2 === 2){
    return "paper"
}
else if(3 === 3){
return " scissors"
}
if(`${rock}`==="rock"){
    return 'tie'
}
else if ("rock"==="scissors"){
    return "rock wins"
}
if("paper"==="paper"){
    return "tie"
}
else if("paper"==="rock"){
    return "paper wins"
}
if("scissors"==="scissors"){
    return "tie"
}
else if("scissors"==='paper')
return "scissors wins"
}

console.log(game(2))