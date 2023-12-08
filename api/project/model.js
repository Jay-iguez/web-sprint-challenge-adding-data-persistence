// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const projects = await db('projects')

    return projects
}

module.exports = {
    getAll
}