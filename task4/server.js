const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.json({msg: 'http://localhost:5200/random'});
});
app.get('/random',(req,res)=>{
    const randomNumber = (Math.random()*100);
    res.json({random: randomNumber});
})

const port = 5200;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
