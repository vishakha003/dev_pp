
let content=process.argv.slice(2);
let fs=require("fs");
console.log(content);


let flag=[];
let file=[];

for(let i=0;i<content.length;i++){
    if(content[i].startsWith('-')){
        flag.push(content[i]);
    }
    else{
        file.push(content[i]);
    }
}
let filekadata="";
for(let i=0;i<file.length;i++){
    filekadata+=fs.readFileSync(file[i]);
}
console.log(filekadata);
