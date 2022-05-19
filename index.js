const express = require("express")
require('dotenv').config()
const breadRoutes = require('./controllers/breads_controller')
const app = express()

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())

//middleware
app.use(express.static('public'))

//routes
app.use('/breads', breadRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to Bread!')
})

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

