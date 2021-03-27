const fs=require("fs");

function mypromiseified(filepath){
    return new Promise(function(resolve,reject){
        fs.readFile(filepath,function(error,data){
            if(error){
                reject(error);
            }else{
                resolve("i have invoked resolve!!!");
            }
            })
        });
    }


    let pendingpromise=mypromiseified("./f1.txt");

    pendingpromise.then(function(data){
        console.log(data+"");
    })
    pendingpromise.catch(function(error){
        console.log(error);
    })
