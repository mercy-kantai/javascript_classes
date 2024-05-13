
const intership = false;
const ourPromise = new Promise ((resolve, reject)=>{
    if (intership){
        resolve();
    }else{
        reject("Pray for me");
    }
})
ourPromise
.then((response) =>{
    console.log({response});
    console.log('I will be confirmed');
})
.catch((error) =>{
    console.log({error});
    console.log('I will continue applying for jobs');
})
.finally(()=>{
    console.log("I will still be successful");
});

console.log({ourPromise});




const successWish = async ()=>{
  try{
    await ourPromise;
    console.log("My successful wish");
  }
  catch{
    console.log("My successful wish is not successful");
  }
}
successWish();


function greeting(){
    console.log('Hello World!');
}
greeting();