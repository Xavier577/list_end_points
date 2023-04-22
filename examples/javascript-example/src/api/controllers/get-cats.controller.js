async function getCatsController(_req, res, _next) {
  res.send("Got some cats");
}

module.exports = getCatsController;
