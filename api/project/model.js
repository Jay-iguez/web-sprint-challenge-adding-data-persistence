// build your `Project` model here
const db = require('../../data/dbConfig')

const format_project_completed_value = (array) => {
    console.log('made it!', array)
    const result = array.map(project => {
        console.log('project', project)
        if (project.project_completed ) {
            if (project_completed === 0) {
                project.project_completed = false
            } else {
                project.project_completed = true
            }
        } else {
            project.project_completed
            project.project_completed = false
        }
        return project
    })
    console.log('should make it too', result)
    return result
}

const project_completed_to_binary = (array) => {

}

const getAll = async () => {
    const projects = await db('projects')

    const formatted_projects = format_project_completed_value(projects)

    return formatted_projects
}

const create = async (body) => {

    console.log('body', body)

    if (!body.project_name) {
        return { undefined: true }
    }

    let updated_project_completed = { ...body }

    if (body.project_completed && body.project_completed !== null) {
        updated_project_completed.project_completed = updated_project_completed.project_completed === 1
    } else if (body.project_completed === null || false) {
        updated_project_completed.project_completed = 0
    }

    const [id] = await db('projects').insert(updated_project_completed)

    const new_project = await db('projects').where('project_id', id)

    console.log('yes,', new_project)

    const formatted_project = format_project_completed_value(new_project)

    console.log('whatf, ', formatted_project)

    return formatted_project
}

module.exports = {
    getAll,
    create
}