const journal = require("../data/journal");

const getAllJournals = (req, res) => {
  const journalCopy = JSON.parse(JSON.stringify(journal));
  const { query } = req;
  let { limit, offset } = query;
  limit = Number(limit);
  offset = Number(offset);

  const limitJournal = journalCopy.slice(offset, offset + limit);
  res.status(200).send({
    journals: limitJournal,
    hasMore: offset + limit < journalCopy.length,
    success: true
  })
};

module.exports = getAllJournals;