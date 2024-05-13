function add (num1,num2){
    const sum = num1 + num2;
    console.log({console: sum});
    console.log({"num-in":sum});
    return {sum}
}
console.log(add(2,3));
//add(4,5);
//console.log({"num-out":sum});

//fuction expression
const subtraction = function (num1, num2){
    console.log(num1-num2);
}
subtraction(20,10);
// for arrow fuctions
const multiply = (num1, num2) => console.log(num1 * num2);
multiply(5,6);

//
//function(){
  //  console.log('hello'};
//}()

//hosting

