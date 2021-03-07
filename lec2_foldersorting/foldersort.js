const fs=require("fs");
const path=require("path");
let extensions=require("./util");
let extfolderpath;
let folderpath="./download";


//checking the extension
function checkfolder(extension){

    // check if extension is matching with any folderName
  // .jpg
  // "./Downloads"
 
  for(let key in extensions){
      if(extensions[key].includes(extension)){
          extfolderpath=`${folderpath}/${key}`;
          break;
      }
  }
  return fs.existsSync(extfolderpath);

}

//movefile

function movefile(filename){
    //copy file

    let sorcepath=`${folderpath}/${filename}`;
    let destpath=`${extfolderpath}/${filename}`;
    fs.copyFileSync(sorcepath,destpath);


    //delete file
    fs.unlinkSync(sorcepath);
}


//create file
function createfolder(){
    fs.mkdirSync(extfolderpath);
}


function sortfolder(folderpath){
    //get the content of folderpath

    let content=fs.readdirSync(folderpath);

    for (let i = 0; i < content.length; i++) {
        // get extension of each file
        let extensionName = path.extname(content[i]);
        console.log(extensionName);

    let extensionFolderExist = checkfolder(extensionName);
    if (extensionFolderExist) {
      movefile(content[i]);
    } else {
      createfolder();
      movefile(content[i]);
    }
}

}

sortfolder(folderpath);