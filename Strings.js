let a = 'Hello';
let b = "World";
let c = `There`;

console.log('length', a.length);
console.log("index", a[3]);
console.log('position', a.indexOf('o'));
a[2] = 'f'
console.log({a});

//concatenation
let d = a+ " " +b;
console.log({d});
let e = `${a} ${b}. I like coding!`;
console.log({e});

function charFreq(str) {
    //Initialize an empty dictionary to store the frequency of my characters
    var frequency = {};
    //split the string and convert it to lowercase
    // loop through the array of characters
    for (var i = 0; i < str.length; i++) {
        //Access each character in in the array
      var character = str.charAt(i);
      //Check if the character already exists as a key in the dictionary
      if (frequency[character]) {
        // when it has already appears add one
        frequency[character]++;
        // if it has not yet appeared count it as one
      } else {
        frequency[character] = 1;
      }
    }
    return frequency;
  };
  
  console.log(charFreq("aabbabcbdbabdbdbabababcbcbab"));

  function insertElement(arr,value,idx){
    if(idx > arr.length){
      return "INvalid index"
    }
    else{
      let newArray = arr.slice(0,idx)
      .concat(value, arr.slice(idx))
      return newArray 
    }

  }
  console.log(insertElement([1,2,3,4,5],3,4));


   
