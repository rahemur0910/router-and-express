const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({msg: 'Home page'});
});

app.get('/about', (req, res) => {
    res.json({ msg: "This is the about page" });
});

app.get('/contact', (req,res)=>{
    res.json({email: 'support@pwskills.com'});
});

app.get((req,res)=>{
    res.status(404).json({message:'Not found'});
})

const port = 5150;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
