// build your `Project` model here
const db = require('../../data/dbConfig')

const project_completed_to_binary = (array) => {
    const result = array.map(project => {
        if (project.project_completed && project.project_completed !== null || project.project_completed === true){
            project.project_completed = 1
        } else if (!project.project_completed || project.project_completed === null || false) {
            project.project_completed = 0
        }
        return project
    })
    return result
}

const project_completed_to_boolean = (array) => {
    const result = array.map(project => {
        if (project.project_completed && project.project_completed !== null || project.project_completed === 1){
            project.project_completed = true
        } else if (!project.project_completed || project.project_completed === null || project.project_completed === 0) {
            project.project_completed = false
        }
        return project
    })
    return result
}

const getAll = async () => {
    const projects = await db('projects')

    const formatted_projects = project_completed_to_boolean(projects)

    return formatted_projects
}

const create = async (body) => {

    if (!body.project_name) {
        return { undefined: true }
    }

    let [updated_project_completed] = project_completed_to_binary([{ ...body }])

    const [id] = await db('projects').insert(updated_project_completed)

    const new_project = await db('projects').where('project_id', id)

    const [formatted_project] = project_completed_to_boolean(new_project)

    return formatted_project
}

module.exports = {
    getAll,
    create
}