const express = require('express');
const app = express();
const port = 3000;
let requests = 0
// app.use() here

app.use((req,res, next)=> {
    if(req.originalUrl === '/'){
        res.send(Date());
         next();

    } else {
     next();

    }        
    
})

app.get('/', (req, res) => {
    res.end()    
});
// count the number of requests
app.get('/count-me', (req, res) => {
    requests++
    console.log(requests)
    res.send(`${requests}`)
});
