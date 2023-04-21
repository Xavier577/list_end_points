const express = require("express");
const listEndpoints = require("list_end_points");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
listEndpoints.default(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
