const express = require("express");
const RegisterUser = require("../controllers/User/RegisterUser");
const LoginUser = require("../controllers/User/LoginUser");
const registerLimiter = require("../controllers/User/RegisterLimiter");
const ErrorHandler = require("../controllers/User/ErrorHandler");
const UserRouter = express.Router();


// User Routes

UserRouter.post("/register", registerLimiter, RegisterUser, ErrorHandler);
UserRouter.post("/login", LoginUser, ErrorHandler);

module.exports = UserRouter;
