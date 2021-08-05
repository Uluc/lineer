const router = require("express").Router();
let Task = require("../../models/Task");

router.route("/").get((req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const user = req.body.user;
  const task = req.body.task;
  const deadline = req.body.deadline;
  const lifeSection = req.body.lifeSection;
  const completed = req.body.completed;

  const newTask = new Task({
    user,
    task,
    deadline,
    lifeSection,
    completed
  });

  newTask
    .save()
    .then(() => res.json("Task added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((tasks) => {
      tasks.user = req.body.user;
      tasks.task = req.body.task;
      tasks.deadline = req.body.deadline;
      tasks.lifeSection = req.body.deadline;
      tasks.completed = req.body.completed;
      tasks
        .save()
        .then(() => res.json("Task Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })

    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/user/:userId").get((req, res) => {
  Task.find({ user: req.params.user})
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
