const config = {
  port: {
    doc: "The database port",
    format: "port",
    default: 27017,
    env: "DATABASE_PORT",
    sensitive: false,
  },
  host: {
    doc: "The database host",
    format: "*",
    default: "localhost",
    env: "DATABASE_HOST",
    sensitive: false,
  },
  name: {
    doc: "The database name",
    format: "*",
    default: "",
    env: "DATABASE_NAME",
    sensitive: true,
  },
  user: {
    doc: "The database username",
    format: "*",
    default: "",
    env: "DATABASE_USER",
    sensitive: true,
  },
  password: {
    doc: "The database password",
    format: "*",
    default: "",
    env: "DATABASE_PASSWORD",
    sensitive: true,
  },
};

exports.database = config;
