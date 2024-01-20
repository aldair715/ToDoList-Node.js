import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import TASK_CONTROLLER from "./controllers/taskController.js";
import ERROR_CONTROLLER from "./controllers/errorsController.js";
import { fileURLToPath } from "url";
const __DIRNAME = path.dirname(fileURLToPath(import.meta.url)),
  APP = express(),
  PORT = 3000;
APP.use(cors());
APP.use(morgan("dev"));
APP.use(helmet());

APP.set("views", path.join(__DIRNAME, "views"));
APP.set("view engine", "pug");

APP.use(express.static(path.join(__DIRNAME, "public")));
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));

APP.get("/", TASK_CONTROLLER.getAllTasks);
APP.get("/add", TASK_CONTROLLER.getaddTaskForm);
APP.post("/add", TASK_CONTROLLER.addTasks);
APP.get("/edit/:id", TASK_CONTROLLER.geteditTaskForm);
APP.post("/edit/:id", TASK_CONTROLLER.editTasks);
APP.get("/complete/:id", TASK_CONTROLLER.completedTasks);
APP.get("/uncompleted/:id", TASK_CONTROLLER.uncompletedTasks);
APP.get("/delete/:id", TASK_CONTROLLER.deleteTasks);

APP.use(ERROR_CONTROLLER.ERROR_404);

APP.listen(PORT, () => {
  console.log(`Iniciando el servidor en http://localhost:${PORT}`);
});
