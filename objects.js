const cup ={
color:`red`,
size: `small`,
shape:`cylindrical`,
year: 2023,
fuctionality:{
    drinkType: `tea`,
    temperature: `hot`
},
design: [`flora`,`polka`,`checked`],
drink: function(){
    console.log(`use me to drink tea`);
    console.log(`my main use is to drink ${this.fuctionality.drinkType}`);


}


};
console.log(`size`,cup.size);
console.log(`shape`,cup['shape']);
console.log(`drinkType`,cup.drinkType);
console.log(cup.drink());

cup.color = "green"

delete cup.color
console.log(cup);

const values = Object.values(cup)
console.log({values});

const keys = Object.keys(cup)
console.log({keys});



// const products = [
//     { name: 'Laptop', price: 1200, category: 'Electronics' },
//     { name: 'Shirt', price: 25, category: 'Clothing' },
//     { name: 'Headphones', price: 80, category: 'Electronics' },
//     { name: 'Shoes', price: 60, category: 'Clothing' },
//   ];


//     function groupByCategory(products){
//         const categories = Object.groupBy(products,product=> product.category)
//         return categories
//     }
//     console.log(groupByCategory(products));


// Object.keys(cup).forEach(item =>{
//     console.log({keys:item, values:cup(item)});
// })



const users = [
  {id:1, name:"Mercy"},
  {id:2, name: "John"},
  {id:3, name: "Peter"}
];
function identityCards(users){
    let ids = users.map(user => user.id)
    return ids
   
}
console.log(identityCards(users));

function allNames(users){
   let names = users.map(user => user.name.toUpperCase())
   return names
}
console.log(allNames(users));

// Increment numbers by its index pposition
function addingAllNumbers(numbers){
    let adding = numbers.map((number, index) => number + index)
    return adding
}
console.log(addingAllNumbers([1,2,3,4,5,6]));