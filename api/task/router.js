// build your `/api/tasks` router here
const express = require('express')
const task = express.Router()

task.get('/', async (req, res, next) => {
    try {
        res.status(200).json({
            message: 'dog'
        })
    } catch(err) {
        err.status = 500
        err.message = `Error in fetching resources`
        next(err)
    }
})

task.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = task