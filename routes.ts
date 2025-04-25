import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import * as taskController from "../controllers/taskController.ts";

const router = new Router();

router
  .get("/tasks", taskController.getAllTasks)
  .get("/tasks/:id", taskController.getTaskById)
  .post("/tasks", taskController.createTask)
  .delete("/tasks/:id", taskController.deleteTask);

export default router;