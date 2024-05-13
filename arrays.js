let fruits = ["Mango", "Apple","Banana","Orange"]

let array = [20,30,6,7];

console.log({fruits});
console.log({array});

//Creatiing an array 
let array1 = [90,10,30,50];
console.log({array1});

//replcing items in an array
fruits[1] = 3
console.log({fruits});

//extracting an element in an array
console.log(fruits[2]);

//finding length
console.log('length', fruits.length);

//finding the last element in array
console.log([fruits.length -1]);

//adding a value at the last value in an array
let addLast = fruits.push("Kiwi")
console.log({fruits});

//adding a value at the first item in an array
let addFirst = fruits.unshift("Avocado");
console.log({fruits});

//removing a last item in the array
let removeLast = fruits.pop()
console.log({fruits});

//removing a first item in an array
let removeFirst = fruits.shift()
console.log({fruits});


//adding all items in array 
//Reduce method
let items = [20,30,24,13,56];

let add = items.reduce((acc, curr)=> acc + curr)
console.log({add});

//multipy each item in an array// maping method
let multipy = items.map(item => item *item);
console.log({multipy});


//
let addEach = [ ];
let total = 0;

 items.forEach((items)=> {
    const add = items +2
    console.log({add}); 
    addEach.push.add  
 })
 console.log({addEach});
 console.log(total);

 //mapping method
 let multipyAll = 1

 items.map(items =>{
    multipyAll *=items;
    return items
 })
 console.log({multipyAll});


// adding each item in an array
let adding = items.map(item => item +2);
console.log({adding});


//Destructurng //giving variables to the items in your array
let [num1, num2, num3,... rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});

//Checking if an element is exists in an array
//indexOf method
let arr3 = [10,20,30]
if (arr3.indexOf(30) !== -1){
   console.log("Element found");
}else {console.log("Element not found");
}
//how to remove an element at a specific index   ||clarification||
let arr4 = ["wow","me","the"]
arr4.splice(1,2);
console.log(arr4);

//array concatenation
let a = ["cow","dog","cat"]
let b = [1,2,3,4]
let c = ["o","e","a"]
let newArray = a.concat(b,c);
console.log(newArray);




//USING FIND// first even number in an array
let firstEvenNumber = e.find(e => e %2 ===0);
console.log(firstEvenNumber);

let q = [1,3,4,100];
console.log({q});

// Iteration Methods in Arrays javascript
//Looping through an array

//Loop method
let arr = [1,2,3,4];
for (let i=0; i<arr.length;i++){
   console.log(arr[i]);
}
//For each method
let arr2 = [2,3,4,5,6];
arr2.forEach(function(a){
   console.log(a);
})

//Map method 
let arr6 = [1,2,3,4];
let newArr=  arr6.map(function(a){
  return a * 3
})
console.log(newArr);

//flatmap method
let arr7 = [11,12,13,14,15]
let after_flatmap = arr7.flatMap(a => a *2)
console.log(after_flatmap);

//USING FILTER METHOD
//how to find evenNumbers in an array
let e = [2,7,9,8,10,11,23,43,18]
let evenNumbers = e.filter(e => e %2 ===0);
console.log(evenNumbers);




