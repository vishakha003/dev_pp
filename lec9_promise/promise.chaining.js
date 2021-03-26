//facts about promise
//promisified function always give a pending promise
//itinial state of promise is pending
//pending promise can only be resolved into styates
//then and catch can only be called on pending promise
//then attach a sucess callback function to the pending promise
//catch attach a failure callback to the pending promise
//then and catch also give us a pending promise known as thenkapromise
//then and catch are also async function

//chainig
const fs=require("fs");
let f1kapromise=fs.promises.readFile("./f1.txt");
f1kapromise.then(function(data){
    console.log(data+"");
    let f2kapromise=fs.promises.readFile("./f2.txt");
    return f2kapromise;
})
.then(function(data){
    console.log(data+"");
    let f3kapromise=fs.promises.readFile("./f3.txt");
    return f3kapromise;
})
.then(function(data){
    console.log(data+"");
})
