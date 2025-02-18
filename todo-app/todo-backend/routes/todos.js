const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const { setAsync, getAsync } = require("../redis");

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const prevVal = await getAsync("added_todos");
  await setAsync("added_todos", Number(prevVal) + 1);
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.json(req.todo); // Implement this
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const toUpdate = req.todo;
  console.log(toUpdate);
  toUpdate.text = req.body.text || toUpdate.text;
  toUpdate.done = req.body.done;
  toUpdate.save();
  res.json(req.todo); // Implement this
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
