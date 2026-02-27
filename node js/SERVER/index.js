const http=require("http");

const myServer=http.createServer(
  (res, re)=>{
  console.log("New Req Rec.");
  res.end("Hello From Server");
}
);//create server

myServer.listen(8000,()=>console.log("server started!"));

