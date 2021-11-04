const express = require("express");
const router = express.Router();
const { getAsync } = require("../redis");

router.get("/", async (_, res) => {
  const added_todos = await getAsync("added_todos");
  res.json({ added_todos }).end();
});

module.exports = router;
