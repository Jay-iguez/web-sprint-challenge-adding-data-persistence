/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {task_description: 'Open all jars', task_notes: 'Use a towel', task_completed: true, project_id: 1},
    {task_description: 'Setup unity environment', task_notes: 'Get used to the new gui', task_completed: false, project_id: 2},
    {task_description: 'Lay down', task_notes: 'Get comfortable', task_completed: false, project_id: 3}
  ]);
};
