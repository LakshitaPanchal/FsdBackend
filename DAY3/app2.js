const express = require('express');
const fs=require('fs/promises');
const app=express();
app.use(express.json());
let users=[

];
const readdata=()=>{
    users=fs.readFile('./data.json','utf-8')
}
const writedata=()=>{
    fs.writeFile('./data.json',JSON.stringify(users,null,2));
}
app.get('/api',(req ,res)=>{
    readdata();
    res.json(users);
})
app.post('/users',(req ,res)=>{
    const data=req.body;
    readdata();
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    writedata();
    res.json({message:'data received',data:data});
})
app.get('/users',(req ,res)=>{
    res.send('welcome to backend server');
})
app.listen(9000,()=>{
    console.log('server running on port 9000');
});