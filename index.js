const express = require('express');

const app = new express();

const path = require('path');



app.use(express.static('public'));

app.listen(5000, ()=> {
    console.log("App is Listening at Port 5000.........");
});


app.get('/', (request, response)=> {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/about', (request, response)=> {
    response.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/contact', (request, response)=> {
    response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.get('/portfolio', (request, response)=> {
    response.sendFile(path.resolve(__dirname, 'pages/portfolio.html'))
})

app.get('/services', (request, response)=> {
    response.sendFile(path.resolve(__dirname, 'pages/services.html'))
})
