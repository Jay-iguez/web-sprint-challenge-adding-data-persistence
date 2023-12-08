// build your server here and require it from index.js
const express = require('express')
const database_router = require('./database-router')

const server = express()

server.use(express.json())
server.use('/api', database_router)

module.exports = server