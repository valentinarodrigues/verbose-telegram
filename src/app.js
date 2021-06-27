const express = require('express')

const app = express()

// valentinarodrigues.com
// valentinarodrigues.com/help
// valentinarodrigues.com/about

app.get('', (req, res)=>{
    console.log('req', req)
    res.send('Hello express')
})

app.get('/help', (req, res)=>{
    res.send('help page')
})

app.get('/about', (req, res)=>{
   res.send('About')
})

app.get('/weather', (req, res)=>{
    res.send('Weather')
})
app.listen(3000, ()=>{
    console.log('Server is up at port 3000')
})