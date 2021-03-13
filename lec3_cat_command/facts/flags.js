let fs=require("fs");


let f1kadata=fs.readFileSync("./f1.txt");
f1kadata=f1kadata+"";

let data=f1kadata.split("\r\n");
console.log(data);

//-s remove extra space

let removesp=[];
let emptypush=false;

function removelargespace(data){
    for(let i=0;i<i<data.length;i++){
       if (data[i]=='' && !emptypush){
            removesp.push(data[i]);
            emptypush=true;
        }else if(data[i]!=''){
            removesp.push(data[i]);
        }
    }
}

removelargespace(data);
let joinsp=removesp.join("\n");
console.log(joinsp);

//-b add space
let count=1;

function addlinenum(data){
    for(let i=0;i<i<data.length;i++){
        if(data[i]!=''){
            data[i]=`${count}/${data[i]}`;
        }
    }
    let addline=data.join("\n");
    console.log(addline);
    
}
addlinenum(data);



// -n => add count to all lines
function addLineNumberToAllLines(data){
    for(let i=1 ; i<data.length+1 ; i++){
        data[i-1] = `${i}. ${data[i-1]}`;
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
}
addLineNumberToAllLines(data);


