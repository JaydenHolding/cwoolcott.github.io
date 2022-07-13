
var age = 34; //number
var firstName = "Aashay"; //string
var isInClass = true; //Boolean 


var lastName = "Smith"; //String
var houseNumber = 456; //Number
var isSleeping = false; //Boolean

var number1 = 123;
var number2 = "123";

var isEqual = (number1 == number2); //true
var isEqualType = (number1 === number2); //false

//console.log("isEqual", isEqual);

var isHappy = true;
var isHungry = 1;

var happyHungry = (isHappy == isHungry);


//console.log("happyHungry", happyHungry);

var number3 = 1234;
var number4 = "1234";


var isSame = (number3 != number4); //false
var isSameType = (number3 !== number4); //true

var isACalculator = !true; // false

//console.log("isSame", isSame);

var num1 = 5;
var num2 = 5;

//console.log("compare", num1 >= num2);

// if (num1 == num2){ //true
//     console.log("THEY ARE THE SAME VALUE!")
// }
// else if (num1 === num2){ //true
//     console.log("THEY ARE THE SAME VALUE AND TYPE!")
// }
// else{
//     console.log("NOT THE SAME")
// }

//console.log ("RESULT", (num1 === num2) || (number3 === number4));

//console.log("Number1 variable is ", number1)

var numA = 3;
var numB = 5;


var likesSeafood = false;

if (likesSeafood){
    console.log("Likes SeaFood!")
}

if (typeof numA === "number" && typeof numB === "number"){
    console.log("Yay! Total is: ", numA + numB);
}
else{
    console.log("THESE ARE NOT BOTH NUMBERS!")
}

