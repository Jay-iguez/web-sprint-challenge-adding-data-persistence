// build your server here and require it from index.js
const express = require('express')
const database_router = require('./database-router')

const server = express()

server.use(express.json())
server.use('/api', database_router)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server