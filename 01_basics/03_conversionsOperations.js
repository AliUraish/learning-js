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

let str4 = "1"
let str5 = "2"

let str6 = str4 + str5
console.log(str6);

let str7 = str4 + 2