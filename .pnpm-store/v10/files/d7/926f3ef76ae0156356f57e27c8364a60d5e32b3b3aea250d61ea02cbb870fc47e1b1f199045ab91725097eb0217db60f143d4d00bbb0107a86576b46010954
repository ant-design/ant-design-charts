// src/cli/forkedDev.ts
var import_utils = require("@umijs/utils");
var import_constants = require("../constants");
var import_service = require("../service/service");
(0, import_utils.setNodeTitle)(`${import_constants.FRAMEWORK_NAME}-dev`);
(0, import_utils.setNoDeprecation)();
(async () => {
  try {
    let onSignal = function(signal) {
      if (closed)
        return;
      closed = true;
      service.applyPlugins({
        key: "onExit",
        args: {
          signal
        }
      });
      process.exit(0);
    };
    const args = (0, import_utils.yParser)(process.argv.slice(2));
    const service = new import_service.Service();
    await service.run2({
      name: import_constants.DEV_COMMAND,
      args
    });
    let closed = false;
    process.once("SIGINT", () => onSignal("SIGINT"));
    process.once("SIGQUIT", () => onSignal("SIGQUIT"));
    process.once("SIGTERM", () => onSignal("SIGTERM"));
  } catch (e) {
    import_utils.logger.fatal(e);
    import_utils.printHelp.exit();
    process.exit(1);
  }
})();
