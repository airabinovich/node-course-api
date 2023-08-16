const userService = require("../service/userService")

module.exports.signup = async (req, res) => {
    const response = {
        status: 200,
        message: "Signup success",
        body: {}
    }
    try {
        const createUserResult = await userService.signup(req.body)
        res.status(response.status).send({...response, body: createUserResult})
    } catch (error) {
        res.status(500).send({...response, status: 500, message: error.message})
    }
}

module.exports.login = async (req, res) => {
    const response = {
        status: 200,
        message: "Login success",
        body: {}
    }
    try {
        const createProductResult = await userService.login(req.body)
        res.status(response.status).send({...response, body: createProductResult})
    } catch (error) {
        res.status(500).send({...response, status: 500, message: error.message})
    }
}