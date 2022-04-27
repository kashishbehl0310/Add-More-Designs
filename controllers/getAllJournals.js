const journal = require("../data/journal");

const getAllJournals = (req, res) => {
  const journalCopy = JSON.parse(JSON.stringify(journal));
  const { query } = req;
  let { limit, offset } = query;
  limit = Number(limit);
  offset = Number(offset);

  const limitJournal = journalCopy.splice(offset, offset + limit - 1);
  res.status(200).send({
    journals: limitJournal,
    success: true
  })
};

module.exports = getAllJournals;