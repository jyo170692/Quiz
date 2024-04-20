const express = require('express')
const app = express()
const port = 1706
const web = require('./routes/web')
const connectdb = require('./Db/ConnectDb')


app.use('/static', express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use('/',web)
connectdb()
app.listen(port,()=>
{
    console.log(`Server Run Successfuly ${port}`)
})