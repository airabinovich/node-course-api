const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");
const schemaValidator = require("./middleware/joiSchemaValidator");
const userSchema = require("./schema/userSchema");

router.post("/signup",
    schemaValidator.validateBody(userSchema.signupSchema),
    userController.signup
)

router.post("/login",
    schemaValidator.validateBody(userSchema.signupSchema),
    userController.login
)

module.exports = router;