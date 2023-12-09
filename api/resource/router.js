// build your `/api/resources` router here
const express = require('express')
const Resource_Model = require('./model')
const resource = express.Router()

resource.get('/', async (req, res, next) => {
    try {
        const resources = await Resource_Model.getAll()
        res.status(200).json(resources)
    } catch(err) {
        res.status(500)
    }
})

resource.post('/', async (req, res, next) => {
    try{
        const new_resource = await Resource_Model.create(req.body)
        if (new_resource?.undefined !== undefined) {
            res.status(400).json({
                message: 'Make sure to include resource_name!'
            })
        } else {
            res.status(201).json(new_resource)
        }
    } catch(err){
        res.status(500).json({
            message: 'Error in creating new resource: ' + err.message
        })
    }
})

module.exports = resource