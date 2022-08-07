import {
  createContainer,
  asValue,
  asClass,
  asFunction,
  InjectionMode,
  Lifetime,
} from "awilix";
import { scopePerRequest } from "awilix-express";
import config from "config";
import router from "interfaces/http/router/routes";
import models from "infra/database/data";
import restServer from "interfaces/http/Server";
import Logger from "infra/logging/Logger";
import tracing from "infra/tracer/tracer";

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  containerMiddleware: asValue(scopePerRequest(container)),
  restServer: asClass(restServer),
  config: asValue(config),
  appEnvironment: asValue(config.get("app.env")),
  router: asFunction(router),

  // Infrastructure layer
  logger: asClass(Logger),
  models: asValue(models),
  tracing: asValue(tracing),

  // External services
});

// load all repositories
container.loadModules(
  [
    [
      "infra/repositories/*!(BaseRepository).js",
      {
        lifetime: Lifetime.SCOPED,
        register: asClass,
      },
    ],
  ],
  {
    // we want `TodoRepository` to be registered as `todoRepository`.
    formatName: "camelCase",
    resolverOptions: {},
    cwd: __dirname,
  }
);

// load all usecases
container.loadModules(
  [
    [
      "app/*/*!(index.js).js",
      {
        lifetime: Lifetime.SCOPED,
        register: asClass,
      },
    ],
  ],
  {
    // we want `GetATodo` to be registered as `getATodo`.
    formatName: "camelCase",
    resolverOptions: {},
    cwd: __dirname,
  }
);

export default container;
