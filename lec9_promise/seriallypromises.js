//multiple file
//promisfied function
//read serially

const fs=require("fs");
let files=["../f1.txt","../f2.txt","../f3.txt"];


    let f1kapromise=fs.promises.readFile(files[0]);
for(let i=1;i<files.length;i++){
    console.log(data+"");
    let nextFilePromise=fs.promises.readFile(files[i]);
    return nextFilePromise;
)}
}

