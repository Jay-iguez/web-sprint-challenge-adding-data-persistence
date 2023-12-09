// build your `/api/tasks` router here
const express = require('express')
const Task_Model = require('./model')
const task = express.Router()

task.get('/', async (req, res, next) => {
    try {
        const tasks = await Task_Model.getAll()
        res.status(200).json(tasks)
    } catch(err) {
        res.status(500).json({
            message: "Error in getting tasks: " + err.message
        })
    }
})

task.post('/', async (req, res, next) => {
    try {
        const new_task = await Task_Model.create(req.body)
        if (new_task?.undefined !== undefined){
            res.status(400).json({
                message: `${new_task.message}`
            })
        } else {
            res.status(201).json(new_task)
        }
    } catch(err){
        res.status(500).json({
            message: "Error in creating new post: " + err.message
        })
    }
})


module.exports = task