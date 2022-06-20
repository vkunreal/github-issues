const axios = require("axios");

const requestGET = async (req) => {
  try {
    const response = await axios.get(req);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

class issuesServices {
  async getIssuesAPI(user_name, repo) {
    const request = `${process.env.github}/${user_name}/${repo}/issues`;
    const issues = await requestGET(request);

    return issues;
  }

  async getIssueAPI(user_name, repo, id) {
    const request = `${process.env.github}/${user_name}/${repo}/issues/${id}`;

    return await requestGET(request);
  }

  async getSortedIssuesAPI(user_name, repo, sort) {
    const request = `${process.env.github}/${user_name}/${repo}/issues?sort=${sort}`;

    return await requestGET(request);
  }
}

module.exports = new issuesServices();
