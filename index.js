







var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var server = express()

server.set('view engine', 'ejs')
server.use(express.static('views'))
server.set('views', __dirname+'/views')

server.get('/', function(request, response){
    response.render('home.ejs')
})

server.get('/about', function (request, response){
  response.render('about.ejs')   
})

server.get('/contact', function (request, response){
  response.render('contact.ejs')   
})

server.get('/portfolio', function (request, response){
  response.render('portfolio.ejs')   
})

var port = 8080

server.listen(port, () => {
    console.log('Server running on port: '+port)
})


 