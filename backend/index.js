const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') //views of the project
app.set('layout', 'layouts/layout') //Every layouts
app.use(expressLayout)
app.use(express.static('public')) // for stylesheets and js files 

app.listen(process.env.PORT || 3000)