// build your `Task` model here
const db = require('../../data/dbConfig')

const task_completed_to_binary = (array) => {
    const result = array.map(task => {
        if (task.task_completed && task.task_completed !== null || task.project_completed === true){
            task.task_completed = 1
        } else if (!task.task_completed || task.task_completed === null || false) {
            task.task_completed = 0
        }
        return task
    })
    return result
}

const task_completed_to_boolean = (array) => {
    const result = array.map(task => {
        if (task.task_completed && task.task_completed !== null || task.project_completed === 1){
            task.task_completed = true
        } else if (!task.task_completed || task.task_completed === null || task.task_completed === 0) {
            task.task_completed = false
        }
        return task
    })
    return result
}

const getAll = async () => {
    const tasks = await db('tasks as ts')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
        .join('projects as p', 'p.project_id', '=', 'ts.project_id')

    const formatted_tasks = task_completed_to_boolean(tasks)

    return formatted_tasks
}

const create = async (body) => {
    if (!body.task_description){
        return {undefined: true, message: 'Must include task_description!'}
    } else if (!body.project_id){
        return {undefined: true, message: 'Must include project_id!'}
    }

    const does_project_exist = await db('projects').where('project_id', body.project_id)

    if (!does_project_exist) {
        return {undefined: true, message: 'Invalid project_id!'}
    }

    const body_to_post = {
        task_description: body.task_description,
        task_notes: body.task_notes || null,
        task_completed: body.task_completed || null,
        project_id: body.project_id
    }

    const [formatted_body_to_post] = task_completed_to_binary([body_to_post])

    const [id] = await db('tasks').insert(formatted_body_to_post)

    const new_task = await db('tasks').where('task_id', id)

    const [formatted_new_task] = task_completed_to_boolean(new_task)

    return formatted_new_task
}


module.exports = {
    getAll,
    create
}