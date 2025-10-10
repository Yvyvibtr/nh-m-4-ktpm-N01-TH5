const express = require("express");
const route = express.Router();
const AuthenticateControllers = require("../../../../../../Downloads/CSE702025-N06-Nhom-1/CSE702025-N06-Nhom-1/admin/src/controllers/authenticate-controllers");

//-------------------------------------

route.get("/", AuthenticateControllers.showLoginForm);
route.get("/login", AuthenticateControllers.showLoginForm);
route.post("/login", AuthenticateControllers.handleLogin);
route.get("/logout", AuthenticateControllers.handleLogout);

//-------------------------------------
module.exports = route;
