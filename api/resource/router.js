// build your `/api/resources` router here
const express = require('express')
const resource = express.Router()

resource.get('/', async (req, res, next) => {
    try {
        const stuff = process.env.NODE_ENV
        res.status(200).json({
            message: stuff
        })
    } catch(err) {
        err.status = 500
        err.message = `Error in fetching resources`
        next(err)
    }
})

resource.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = resource