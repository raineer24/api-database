// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/nerstore',
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/testnerstore',
  }
  };
