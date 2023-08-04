const express = require('express');

const app = new express();

const path = require('path');

const ejs = require('ejs');

app.set('view engine', 'ejs');



app.use(express.static('public'));

app.listen(5000, ()=> {
    console.log("App is Listening at Port 5000.........");
});



// Normal Render with Routes
// app.get('/', (request, response)=> {
//     response.sendFile(path.resolve(__dirname, 'pages/index.html'))
// })

// app.get('/about', (request, response)=> {
//     response.sendFile(path.resolve(__dirname, 'pages/about.html'))
// })

// app.get('/contact', (request, response)=> {
//     response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
// })

// app.get('/portfolio', (request, response)=> {
//     response.sendFile(path.resolve(__dirname, 'pages/portfolio.html'))
// })

// app.get('/services', (request, response)=> {
//     response.sendFile(path.resolve(__dirname, 'pages/services.html'))
// })


// Rendering with ejs Templating Engine
app.get('/', (request, response)=> {
    response.render('index')
})

app.get('/about', (request, response)=> {
    response.render('about')
})

app.get('/contact', (request, response)=> {
    response.render('contact')
})

app.get('/portfolio', (request, response)=> {
    response.render('portfolio')
})

app.get('/services', (request, response)=> {
  response.render('services')
})
