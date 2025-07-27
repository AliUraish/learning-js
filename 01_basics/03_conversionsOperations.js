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
console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"Aliuraish" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//33 => "33"
//true => "true"
//false => "false"