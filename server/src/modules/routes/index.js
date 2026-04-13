const express = require("express");
const router = express.Router();

const { registrationRoute } = require("../registration/registration.routes");

const moduleRoutes = [
  {
    path: "/users",
    route: registrationRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
