// build your `/api/projects` router here
const express = require('express')
const Project_Model = require('./model')
const project = express.Router()

project.get('/', async (req, res, next) => {
    try {
        const projects = await Project_Model.getAll()
        res.status(200).json(projects)
    } catch (err) {
        res.status(500).json({
            message: 'Error in fetching projects: ' + err.message
        })
    }
})

project.post('/', async (req, res, next) => {
    try {
        const new_project = await Project_Model.create(req.body)
        if (new_project?.undefined !== undefined) {
            res.status(400).json({
                message: 'Make sure to include project_name!'
            })
        } else {
            res.status(200).json(new_project)
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error in creating project: ' + err.message
        })
    }
})


module.exports = project