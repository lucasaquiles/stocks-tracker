
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('stocks').del()
    .then(function () {
      // Inserts seed entries
      return knex('stocks').insert([
        { id: 1, code: 'AAAA11', amount: 2 },
        { id: 2, code: 'BBBB11', amount: 5 },
        { id: 3, code: 'ABCDE1', amount: 100 }
      ]);
    });
};
