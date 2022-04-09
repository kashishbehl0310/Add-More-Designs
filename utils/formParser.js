const multiparty = require("multiparty");

async function formParser(req) {
  return new Promise((resolve, reject) => {
    let data = {};
    const form = new multiparty.Form();
    form.parse(req, (err, fields) => {
      if (err) {
        reject(err);
      }
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
      resolve(data);
    });
  })
}

module.exports = formParser;