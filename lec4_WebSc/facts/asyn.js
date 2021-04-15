const fs=require("fs");
console.log("start");


fs.readFile("./f1.txt",function(error,data){
    console.log(data+"");
});
 
console.log("end");
while(true){

}

