const express = require('express')
const Routes = express.Router()

const project_routes = require('./project/router')
const resource_routes = require('./resource/router')
const task_routes = require('./task/router')


Routes.use('/resources', resource_routes)
Routes.use('/projects', project_routes)
Routes.use('/tasks', task_routes)

module.exports = Routes