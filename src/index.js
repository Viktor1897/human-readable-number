module.exports = function toReadable (number) {
let numsFrom0to19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

if (number<20) {
    return from0to19(number);
} else if (number<100) {
    return from20to99(number);
} else {
    return from100to999(number);
}

function from0to19 (number) {
    return numsFrom0to19[number];
}

function from20to99 (number) {
    if (number%10!=0){
        return tens[Math.floor(number/10)] + ' ' + from0to19(number%10);
    } else {
        return tens[Math.floor(number/10)];
    }
}

function from100to999 (number) {
    if (number%100==0) {
        return from0to19(Math.floor(number/100)) + ' hundred';
    } else {
        return from0to19(Math.floor(number/100)) + ' hundred ' + ((number%100<20) ? from0to19(number%100) : from20to99(number%100));
    } 
}
}
