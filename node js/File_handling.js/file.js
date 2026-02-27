const fs= require("fs");

//sync..
fs.writeFileSync('./test.txt',"hey there");//create a new file 

//async
fs.writeFile("./test.txt","hello world",(err)=>{});

const result=fs.readFileSync("./contracts.txt","utf-8");//this command read the another file in sync...
console.log(result);

//async
fs.readFile("./contacts.txt","utf-8",(err, result)=>{
  if(err){
    console.log("error",err);
  }else{
    console.log(result);
  }
})