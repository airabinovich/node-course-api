const express = require("express")
const dotenv = require("dotenv")
const productRouter = require('./api/productRouter');

const dbConnection = require("./database/connection")

dotenv.config()
const app = express()
//DB connection

dbConnection()

app.use(express.json())

app.use("/api/v1/product", productRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})