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