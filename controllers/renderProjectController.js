const projects = require("../utils/projects");

const renderProjectController = async function(req, res) {
  const { id } = req.params;
  const projectToRender = projects.filter(p => p.id === id);
  if (projectToRender) {
    res.render("projects.html", {
      data: projectToRender[0]
    });
  } 
}

module.exports = renderProjectController;
