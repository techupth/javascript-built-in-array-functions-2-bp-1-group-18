
function isPalindrome(string) {
let stringToArray = string.split("");
let reverseArray = stringToArray.reverse();
let reversedWord = reverseArray.join("")
if (reversedWord === string){
return true
}else { return false
}
}




//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false