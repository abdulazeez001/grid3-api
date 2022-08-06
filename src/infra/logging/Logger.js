const FluentLogger = require("fluent-logger");

class Logger {
  info(message) {
    try {
      let logMessage = {};
      if (!(message instanceof Object)) {
        logMessage = {
          message,
        };
      }
      console.log(logMessage);
      FluentLogger.emit(this.TAG, {
        ...logMessage,
        ...this.defaultMessage,
        level: "INFO",
      });
    } catch (err) {
      this.failSilently(err);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  failSilently(error) {
    console.error({ loggerSilentError: error });
  }
}

export default Logger;
