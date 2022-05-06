const journal = require("../data/journal");
const fetchPostById = async (req, res) => {
  const { id } = req.params;
  const postToRender = journal.filter(p => p.id === id);
  if (postToRender) {
    res.render("post.html", {
      post: postToRender[0]
    });
  }
};

module.exports = fetchPostById;