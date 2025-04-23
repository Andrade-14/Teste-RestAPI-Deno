import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./controllers/taskController.ts";

const router = new Router();

router
  .get("/tasks", getTasks)          // Rota para obter todas as tarefas
  .post("/tasks", createTask)       // Rota para criar uma nova tarefa
  .put("/tasks/:id", updateTask)    // Rota para atualizar uma tarefa
  .delete("/tasks/:id", deleteTask) // Rota para deletar uma tarefa

export default router;