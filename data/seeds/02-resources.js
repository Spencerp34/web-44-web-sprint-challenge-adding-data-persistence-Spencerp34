
exports.seed = function(knex) {
  return knex('resources').insert([
    { resource_name: "Noodles", resource_description: "Send noods"},
    { resource_name: "Cheese", resource_description: "Kinda Cheesey..."},
    { resource_name: "Bread", resource_description: "Make dat bread"},
    { resource_name: "Peanut Butter", resource_description: "wut"},
    { resource_name: "Jelly", resource_description: "So Jelly"},
    { resource_name: "Cheerios or other cereal", resource_description: "Most basic cereal I thought of."},
    { resource_name: "Milk" }
  ]);
};