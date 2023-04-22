const { Router } = require("express");
const indexController = require("../controllers/index.controller");
const getCatsController = require("../controllers/get-cats.controller");
const postCatsController = require("../controllers/post-cats.controller");

const apiRouter = Router();

apiRouter.get("/", indexController);
apiRouter.get("/cats", getCatsController);
apiRouter.post("/cats", postCatsController);

module.exports = apiRouter;
