let tasks = [
  {
    id: 1,
    task: "Tarea 1",
    completed: false,
  },
  {
    id: 2,
    task: "Tarea 2",
    completed: true,
  },
];
const getAllTasks = (req, res) => {
    //console.log("estamos en get");
    res.render("index", { title: "Lista de Tareas", tasks });
  },
  getaddTaskForm = (req, res) => {
    res.render("add", { title: "Agregar Tareas" });
  },
  addTasks = (req, res) => {
    let { task } = req.body,
      id = tasks.length + 1;
    tasks.push({ id, task, completed: false });
    res.redirect("/");
  },
  geteditTaskForm = (req, res) => {
    let id = parseInt(req.params.id),
      task = tasks.find((task) => task.id === id);
    if (!task) {
      res.redirect("/");
    } else {
      res.render("edit", { title: "Editar Tarea", task });
    }
  },
  editTasks = (req, res) => {
    let id = parseInt(req.params.id),
      taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      res.redirect("/");
    } else {
      tasks[taskIndex].task = req.body.task;

      res.redirect("/");
    }
  },
  completedTasks = (req, res) => {
    let id = parseInt(req.params.id),
      task = tasks.find((task) => task.id === id);
    if (task) {
      task.completed = true;
    }
    res.redirect("/");
  },
  uncompletedTasks = (req, res) => {
    let id = parseInt(req.params.id),
      task = tasks.find((task) => task.id === id);
    if (task) {
      task.completed = false;
    }
    res.redirect("/");
  },
  deleteTasks = (req, res) => {
    let id = parseInt(req.params.id),
      new_tasks = [];
    new_tasks = tasks.filter((task) => task.id !== id);
    tasks = new_tasks;
    res.redirect("/");
  };
export default {
  getAllTasks,
  getaddTaskForm,
  addTasks,
  geteditTaskForm,
  editTasks,
  completedTasks,
  uncompletedTasks,
  deleteTasks,
};
