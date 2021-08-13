
exports.seed = function(knex) {
  return knex('tasks').insert([
    { task_description: "Boil noodles for 8-10 minutes and drain", project_id: 1, task_notes: "Noodles semi sticky", task_completed: 1 }, 
    { task_description: "Add Cheese until its melty and delicious ", project_id: 1, task_completed: 0}, 
    { task_description: "Spread Peanut Butter on one Slice of Bread", project_id: 2, task_notes: "Preferably Creamy PB for best results", task_completed:1}, 
    { task_description: "Spread Jelly on the other Slice of Bread", project_id: 2, task_notes: "Strawberry Jelly"}, 
    { task_description: "Put two slices together. (optional) Cut off crusts ", project_id: 2, task_completed: 0}, 
    { task_description: "Pour recommended serving of Cereal into Bowl", project_id: 3, task_notes: "Don't you dare do Milk first.", task_completed: 0}, 
    { task_description: "Pour Milk into same bowl until milk is just below cereal level.", project_id: 3, task_completed: 1}, 
  ]);
};