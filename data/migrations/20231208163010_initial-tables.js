/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name')
                .notNullable()
                .defaultTo('Eat an entire jar of pickles')
            table.string('project_description')
            table.boolean('project_completed')
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name')
                .notNullable()
                .unique()
                .defaultTo('Notepad')
            table.string('resource_description')
        })
        .createTable('tasks', table => {
            table.increments('task_id')
            table.string('task_description')
                .notNullable()
                .defaultTo('Walk around the street')
            table.string('task_notes')
            table.boolean('task_completed')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .defaultTo(1)
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('project_resources', table => {
            table.increments('project_resource_id')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .defaultTo(1)
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .defaultTo(1)
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
