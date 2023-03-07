const express = require("express");
const User = require("../model/User");
const router =express.Router();
const usersController = require("../controllers/users-controller");


router.post("/", usersController.signup);