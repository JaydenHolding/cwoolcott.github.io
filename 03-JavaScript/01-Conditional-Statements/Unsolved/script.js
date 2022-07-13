// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 25; 
var expression2 = x > 50;

// TODO: Write Your JavaScript Code Here

if (expression1 && expression2){
    console.log("THESE ARE TRUE!")
}
else if (expression1){
    console.log("expression1 is true; expression2 is false")
}
else if (expression2){
    console.log("expression2 is true; expression1 is false")
}
else{
    console.log("BOTH FALSE!");
}