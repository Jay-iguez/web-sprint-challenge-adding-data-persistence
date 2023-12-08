// build your `/api/projects` router here
const express = require('express')
const project = express.Router()

project.get('/', async (req, res, next) => {
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

project.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = project