const express = require('express');
const app = express();
const http = require('http');

const menProducts = [
    {id: 1, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 2, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 3, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 4, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 5, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 6, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 7, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 8, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 9, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
    {id: 10, name: 'Shirt',brand: "ABC", price:" $20.00", color: "Red", size: "XXL", category: 'Men'},
];


const womenProducts = [
    {id: 1, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 2, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S",
    category: 'Women'},
    {id: 3, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 4, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 5, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 6, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 7, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 8, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 9, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
    {id: 10, name: 'Skirt',brand: "XYZ", price:" $20.00", color: "Red", size: "S", category: 'Women'},
];

/*const server = http.createServer( (req, res) =>{
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if(req.url === '/')
    {
        res.end(JSON.stringify({message:'Welcome to our API'}));
    }
    else if(req.url ==='/men')
    {
        res.end(JSON.stringify(menProducts));
    }
    else if(req.url === '/women')
    {
        res.end(JSON.stringify(womenProducts));
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Error 404 - Page not found');
    }
});*/

app.get('/',(req,res)=>{
    res.status(200).json({message:'Welcome to our API'});
});

app.get('/men',(req,res)=>{
    res.status(200).json(menProducts);
})

app.get('/women',(req,res)=>{
    res.status(200).json(womenProducts);
});

app.use('/others',(req,res)=>{
    res.status(404).send ('Page Not Found');
});


const port = 5050;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
