const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send({
        message: 'DarkVision',
        version: '0.0.1'
    })
})

app.listen(3333)

