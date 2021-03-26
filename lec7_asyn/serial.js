let files=["../f1.txt","../f2.txt","../f3.txt"];
let fs=require("fs");

function getfilecontext(idx){
    if(idx==files.length){
        return;
    }
    fs.readFile(files[idx],function(err,data){
        console.log(data+"");
        getfilecontext(idx+1);
    })
}

getfilecontext(0);