const express = require("express")
const dotenv = require("dotenv")
const productRouter = require('./api/productRouter');
const userRouter = require('./api/userRouter');
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const dbConnection = require("./database/connection")

dotenv.config()
const app = express()

//DB connection
dbConnection()

app.use(express.json())
app.use(express.urlencoded())

app.use("/api/v1/product", productRouter)
app.use("/api/v1/user", userRouter)

// API Documentation
if (process.env.NODE_ENV !== "production") {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})