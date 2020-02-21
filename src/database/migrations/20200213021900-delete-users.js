module.exports = {
  up: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
