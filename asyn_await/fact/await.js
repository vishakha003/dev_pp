let fs=require("fs");
//IMMEDIATE INVOKED FUNCTION EXPRESSION
console.log("start");

(async function(){
    try{
        let f1kapromise=await fs.promises.readFile("./f1/txt");
        let f2kapromise=await fs.promises.readFile("./f1/txt");
        let sbkaData=await Promise.all([f1kapromise,f2kapromise]);
        console.log(sbkaData);
    
    }
    catch(error){
        console.log("inside catch")
        console.log(error);
    }
  

})();

console.log("end");