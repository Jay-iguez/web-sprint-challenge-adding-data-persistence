/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'Eat a jar of pickles', project_description: "Try to buy 8 jars of dill pickles for a low calorie snack competition", project_completed: true},
    {project_name: 'Create a AAA video game about bears', project_description: 'Develop a revolutionary game about bears in a quality that surpasses large studios', project_completed: false},
    {project_name: 'Try to sleep for more than 7 hours a night', project_description: 'Attempt to stop sleeping late and going to bed early for one day', project_completed: false}
  ]);
};
