const request=require("request");
const cheerio=require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary" , cb);
function cb(error,response,data){
    parseData(data);
}

function parseData(html){
    let ch=cheerio.load(html);
    let allcommentry = ch('div[itemprop="articleBody"] p');

    console.log(allcommentry);
    let commentry=ch(allcommentry['0']).text;
    console.log(commentry);

}