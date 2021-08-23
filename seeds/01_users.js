
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          name: 'Test',
          email: 'Test@gmail.com',
          username: 'test',
          password: 'Test'
    }
      ]);
    });
};
