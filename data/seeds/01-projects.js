exports.seed = function(knex) {
  return knex('projects').insert([
    { project_name: 'Macaroni', project_description: "Making a real easy lunch", project_completed: 0 },
    { project_name: 'PB & J'},
    { project_name: 'Cereal', project_description: "Easiest Breakfast", project_completed: 1}
  ]);
};