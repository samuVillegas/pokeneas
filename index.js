const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config() 

app.set('PORT', process.env.PORT || 80 )
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use('/api/pokenea/', require('./routes/pokenea'))

app.listen(app.get('PORT'), () => {
    console.log(`Server running in port: ${app.get('PORT') }`)
})