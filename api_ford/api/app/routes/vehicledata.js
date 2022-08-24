const { vehicledataAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/vehicledata")
    .get(wrapAsync(vehicledataAPI.list));

  app.route('/vehicledata')
  .post(auth, wrapAsync(vehicledataAPI.add))
  .delete(auth, wrapAsync(vehicledataAPI.remove))
  .get(wrapAsync(vehicledataAPI.findById));

  app.route("/vehicledata/:vehicledataID").get(wrapAsync(vehicledataAPI.findById));
};
