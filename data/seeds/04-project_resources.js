exports.seed = function(knex) {
  return knex('project_resources').insert([
    { task_id: 1, resource_id: 1 },
    { task_id: 2, resource_id: 2 },
    { task_id: 3, resource_id: 3 },
    { task_id: 3, resource_id: 4 },
    { task_id: 4, resource_id: 5 },
    { task_id: 6, resource_id: 6 },
    { task_id: 7, resource_id: 7 },
  ]);
};
