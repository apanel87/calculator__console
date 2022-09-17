function calc(operation, firstnumber, secondnumber) {
    if(!operation || !firstnumber || !secondnumber || typeof firstnumber !== 'number' || typeof secondnumber !== 'number') {
        return 'Error';
    }
    if(operation === 'sum') {
        return firstnumber + secondnumber;
    } else if(operation === 'sub') {
        return firstnumber - secondnumber;
    } else if(operation === 'mult') {
        return firstnumber * secondnumber;
    } else if(operation === 'div') {
        return firstnumber / secondnumber;
    } else if(operation === 'Math.pow') {
        return firstnumber ** secondnumber;
    } else {
        return 'unknown operation';
    }
}
console.log(calc('sum', 3, 2));
console.log(calc('mult', 5, 6));
console.log(calc('Math.pow', 2, 4));

