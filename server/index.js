require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log("Database is working [:")
}).catch(error => console.log(error));

app.get("/api/properties", controller.getAllHouses);
app.get("/api/property/:id", controller.getHouse);
app.post("/api/properties", controller.addHouse);
app.delete("/api/property/:id", controller.deleteHouse);


app.listen(SERVER_PORT, () => console.log(`Got my server over at port: ${SERVER_PORT}`))