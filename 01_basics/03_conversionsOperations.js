let score = "33"

//const {score} = \\ req.body //dont know the datatype

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); //sometimes when number and string is mismatched, it will give NaN

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0

//null => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"Aliuraish" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//33 => "33"
//true => "true"
//false => "false"

//******************Operations******************

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3); //power
//console.log(2/3);
//console.log(2%3); //remainder

let str1 = "hello"
let str2 = " Aliuraish"

let str3 = str1 + str2
//console.log(str3);

//console.log(1 + "2");
//console.log("1" + 2);
//console.log("1" + 2 + 2); //If string first then everything will be string
//console.log(1 + 2 + "2"); //If number first then everything will be number
//console.log(3 + "4" + 5); 

//console.log((3 + 4) * 5 % 3);
//Write in brackets to know which operation will be performed first or code will be messy and not appreciated.

//console.log(true);
//console.log(+true); //boolean to number
//console.log(+""); //string to number

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //bad practice
console.log(num1);
console.log(num2);
console.log(num3);

//prefix and postfix
let gameCounter = 100
gameCounter++ //or can be written ++gameCounter
console.log(gameCounter);


