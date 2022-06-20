const issuesServices = require("../services/issuesServices");

class issuesController {
  async getIssues(req, res) {
    const { user_name, repo } = req.params;
    const issues = await issuesServices.getIssuesAPI(user_name, repo);

    res.status(200).json(issues);
  }

  async getIssueById(req, res) {
    const { user_name, repo, id } = req.params;
    const issue = await issuesServices.getIssueAPI(user_name, repo, id);

    res.status(200).json(issue);
  }

  async getSortedIssues(req, res) {
    const { user_name, repo, sort } = req.params;
    const issues = await issuesServices.getSortedIssuesAPI(
      user_name,
      repo,
      sort
    );

    res.status(200).json(issues);
  }
}

module.exports = new issuesController();
