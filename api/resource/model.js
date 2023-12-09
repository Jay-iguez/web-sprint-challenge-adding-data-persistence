// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const resources = await db('resources')

    return resources
}

const create = async (body) => {
    
    if (!body.resource_name) {
        return {undefined: true}
    }

    const body_to_post = {resource_name: body.resource_name, resource_description: body.resource_description || null}

    const [id] = await db('resources').insert(body_to_post)

    const [new_resource] = await db('resources').where('resource_id', id)

    return new_resource
    
}

module.exports = {
    getAll,
    create
}