const path = require('path')
// keep in built package imports above just standard practice
const hbs = require('hbs') // only imported for partials not for hbs itself (views handles it )
const express = require('express')
const app = express()

// directory name
console.log(__dirname)
// filename
console.log(__filename)
app.set('view engine', 'hbs')


// rename folder to templates & check if this works
// const viewsPath = path.join(__dirname, '../templates')
// app.set('views', viewsPath)
console.log(path.join(__dirname, '../public'))
const publicDirectory = path.join(__dirname, '../public')

// setup static directory to serve 
app.use(express.static(publicDirectory))
// below statement will not have any effect if the public directory has index.html
app.get('', (req, res) => {
    // looks at views folder 
    res.render('index', {
        title: 'Index page',
        name: 'Valentina'
    })


})

app.get('/help', (req, res) => {
    res.send('Hello express')
})

app.get('/about', (req, res) => {
    // it picks up about.html
    // res.send('<h1>About<h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'forecast',
        location: 'location'
    })
})

app.listen(3000, () => {
    console.log('Server is up at port 3000')
})