const Joi = require("@hapi/joi");
const {errorResponse} = require("../responses");

function validateSchema(data, schema) {
    console.log("DATA:", data)
    const result = Joi.validate(data, schema, {convert: false});
    if (result.error) {
        return result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            };
        });
    }
    return null;
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        const error = validateSchema(req.body, schema)
        if (error) {
            console.log("error validaring schema:", error)
            return res.status(400).send({...errorResponse, status: 400, message: error})
        }
        console.log("schema validated successfully")
        return next()
    }
}