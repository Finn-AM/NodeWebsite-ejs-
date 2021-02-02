const express = require ('express')
const app = express();
const bodyParser = require('body-parser')
const _ = require('lodash');
const ejs = require('ejs')
app.set('view engine' , 'ejs')
// Defining done


app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))
const a = 'wadididaw'
let posts = [];



app.get('/' ,function(req,res){
 res.render('home',
  {plus: a , 
  posts : posts
  }  )
})


app.get('/about' ,function(req,res){
 res.render('about')
})

app.get('/contact' ,function(req,res){
 res.render('contact')
})

app.get('/compose' ,function(req,res){
 res.render('compose')
})

///form

app.post('/compose', function(req,res){
const post = {title : req.body.newTitle,
              post : req.body.newPost}
              posts.push(post) 
res.redirect('/')
})

// route
app.get('/posts/:postName', function(req,res){

let reqTitle = _.kebabCase(req.params.postName)

posts.forEach(function(post){ 
const availTitle = _.kebabCase(post.title)

if (reqTitle === availTitle){
 res.render('post' , {title:post.title , content:post.post})

}})


})
// route end

app.listen('3000', function(){
 console.log('3000 is running');
 console.log(_.kebabCase('OoOo oOoOO'));
})