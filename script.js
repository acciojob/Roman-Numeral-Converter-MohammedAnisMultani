function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

 var singles = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var thousands = ["", "M", "MM", "MMM", "MMMM"];
//turn the number to a string, split individual characters and then turn each one to a number.
var length = num.toString().length;
var numbers = num.toString().split("").map(Number);
var roman = '';
var i = 0;

switch (length) {
    
  case 4:
    roman = thousands[numbers[i]];
    i++;
    
  case 3:
    roman += hundreds[numbers[i]];
    i++;
    
  case 2:
    roman += tens[numbers[i]];
    i++;
    
  case 1 :
    roman += singles[numbers[i]];
}
return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
