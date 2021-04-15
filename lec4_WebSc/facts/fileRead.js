const fs=require("fs");
const cheerio=require("cheerio");
const { load } = require("cheerio");
let htmlkadata=fs.readFileSync("./index.html");

 let ch=cheerio.load(htmlkadata);
//  let ptag=ch(".main").text(); //this is the class name of index.html

let ptag=ch("p").text();

 console.log(ptag);


//html ka data html treat ho
//html me se=> selector ka base => element get

 