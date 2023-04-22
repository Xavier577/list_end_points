const express = require("express");
const cors = require("cors");
const listEndpoints = require("../../../dist/index");

const app = express();
const apiRoutes = require("./api/routes/index.router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoutes);

app.get("/", (_req, res) => {
  res.send("<h2>Let's code!</h2>");
});

listEndpoints.default(app);

module.exports = app;
