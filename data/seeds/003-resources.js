/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'The art of eating pickles', resource_description: 'A large book all about the different techniques of pickle goodness'},
    {resource_name: 'Bear encyclopedia', resource_description: 'A large extensive span of literature on bears with many topics'},
    {resource_name: 'Mattress store', resource_description: 'A shop that sells comfy beds and blankets'}
  ]);
};
