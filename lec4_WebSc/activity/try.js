const request = require("request");
const cherrio=require("cheerio");

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";

request(url,cb);
function cb(error,response,body){
    parseBody(body);
}
function parseBody(html){
   // i will get html of cricinfo
   let ch=cheerio.load(html);
//    let atag=ch('a[data-hover="View All Results"]').text();
let atag=ch('a[data-hover="View All Results"]').text();
   console.log(atag);
}
