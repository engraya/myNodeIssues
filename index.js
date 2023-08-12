const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = new express();


app.use(fileUpload());


// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const url = 'mongodb://127.0.0.1:27017/my_nodeDB';

mongoose.connect(url, { family: 4 }, { useNewUrlParser: true });


//  Test for Database Successful Connection
// const db = mongoose.connection
// db.once('open', _ => {
//   console.log('Database connected:', url)
// })

// db.on('error', err => {
//   console.error('connection error:', err)
// })

const path = require('path');

const ejs = require('ejs');
const { request } = require('http');


app.set('view engine', 'ejs');


app.use(express.static('public'));


const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`App is Listening at Port ${port}.........`);
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

app.get('/issues', async (request, response)=> {
    const posts = await Post.find({})
    const context = { posts }
    response.render('issues', context)
})

app.get('/posts/new', (request, response)=> {
    response.render('create')
  })


app.post('/posts/store', async (req, res)=> {
   await Post.create(req.body)
    res.redirect("/issues")
})

app.get('/posts/:id', async (req, res)=> {
    const post = await Post.findById(req.params.id)
    context = { post }
     res.render("detail", context)
 })





