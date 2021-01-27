"use strict";

const app = require("express")();
const morgan = require("morgan");
const routes = require("./src/entrypoints/routers");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Account Service is up and running on port ${PORT}`);
});
