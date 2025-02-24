const http=require('http');
const fs=require('fs/promises');
const server=http.createServer(async (requestAnimationFrame ,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','tex/html');
    const data=await fs.readFile('./index.html','utf-8');
    res.end(data);
})
server.listen(9002,()=>{
    console.log('Server is running on port 9002');
})