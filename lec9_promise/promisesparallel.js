const fs=require("fs");
let f1kapendingpromise=fs.promises.readFile("./f1.txt");
let f2kapendingpromise=fs.promises.readFile("./f2.txt");
let f3kapendingpromise=fs.promises.readFile("./f3.txt");

 f1kapendingpromise.then(function(data){
     console.log("f1 ka data"+data);
 });
 f1kapendingpromise.catch(function(error){
     console.log(error);
 });


 f2kapendingpromise.then(function(data){
    console.log("f2 ka data"+data);
});
f2kapendingpromise.catch(function(error){
    console.log(error);
});


f3kapendingpromise.then(function(data){
    console.log("f3 ka data"+data);
});
f3kapendingpromise.catch(function(error){
    console.log(error);
});