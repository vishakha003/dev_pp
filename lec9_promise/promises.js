const fs=require("fs");

//B get a pending promise         //A initially return a pending promise
let peendingPromise=fs.promises.readFile("./f1.txt");  //100gb===10 min
console.log(peendingPromise);

//sucess callback
peendingPromise.then(function(data){
console.log("inside take ka callback scb");
console.log(data);
console.log(peendingPromise);
});

//failure callback==>fcb attach pending promise
peendingPromise.catch(function(error){
    console.log("inside catch ka  callback");
    console.log(error);
    console.log(peendingPromise);

});