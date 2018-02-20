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

