const Router = require("express");
const issuesController = require("../controllers/issuesController");

const issuesRouter = new Router();

issuesRouter.get("/issues/:user_name/:repo", issuesController.getIssues);
issuesRouter.get("/issues/:user_name/:repo/:id", issuesController.getIssueById);

issuesRouter.get(
  "/issues/sorted/:user_name/:repo/:sort",
  issuesController.getSortedIssues
);

module.exports = issuesRouter;
