const db = require("../dbConfig");

module.exports = {
  getAllPens,
  addNewPen,
  removePen
};

async function getAllPens() {
  return db("pens");
}
async function addNewPen(pen) {
  const [id] = await db("pens").insert(pen);
  return db("pens")
    .where({ id })
    .first();
}
async function removePen(id) {
  return db("pens")
    .where({ id })
    .delete();
}
