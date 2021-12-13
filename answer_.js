
var array = []; // input array
   function getFactorials(array) {
    var facArray = [];
    for(var j = 0; j < array.length; j++) {
        num = array[j];
        if (num === 0 || num === 1)
            return 1;
        for (var i = num - 1; i >= 1; i--) {
            num *= i;
        }
        facArray.push(num);
    }
    for(let k=0; k<facArray.length; k++ ){
    return facArray[k]; // output values
    }
}