module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/pens.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seed"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testing-pets"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seed"
    }
  }
};