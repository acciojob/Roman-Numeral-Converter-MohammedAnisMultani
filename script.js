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
 // const obj = {
 //    0:['M',1000], 
 //    1:['D', 500], 
 //    2:['C', 100], 
 //    3:['L', 50], 
 //    4:['X', 10], 
 //    5:['V', 5], 
 //    6:['I', 1]
 //  };


  let result = "";
for(let i=0; i<7; i++){
    let value = obj[i][1];
    let  romans = obj[i][0];
    
    while(num>=value){
        result += romans;
        num = num - value
    }
    
}
return result

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
