const path = require('path')
// keep in built package imports above just standard practice
const express = require('express')


const app = express()

// directory name
console.log(__dirname)
// filename
console.log(__filename)

console.log(path.join(__dirname, '../public'))
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
// below statement will not have any effect if the public directory has index.html
app.get('', (req, res) => {
    res.send('Hello express')
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