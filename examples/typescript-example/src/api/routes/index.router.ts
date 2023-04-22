import { Router } from "express";
import indexController from "../controllers/index.controller";
import getCatsController from "../controllers/get-cats.controller";
import postCatsController from "../controllers/post-cats.controller";

const apiRouter = Router();

apiRouter.get("/", indexController);
apiRouter.get("/cats", getCatsController);
apiRouter.post("/cats", postCatsController);

export default apiRouter;
