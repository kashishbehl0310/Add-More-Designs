const projects = require("../utils/projects.js");

const fetchProjects = (req, res) => {
  const projectCopy = JSON.parse(JSON.stringify(projects));
  const { query } = req;
  let { limit, offset } = query;
  limit = Number(limit);
  offset = Number(offset);
  const limitProjects = projectCopy.reverse().slice(offset, offset + limit);
  res.status(200).send({
    projects: limitProjects,
    hasMore: offset + limit < projectCopy.length,
    success: true
  })
}

module.exports = fetchProjects;