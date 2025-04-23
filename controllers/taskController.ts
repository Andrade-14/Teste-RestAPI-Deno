import { Context } from "https://deno.land/x/oak/mod.ts";
import { Task } from "../models/task.ts";

let tasks: Task[] = [];

// Obter todas as tarefas
export const getTasks = (context: Context) => {
  context.response.body = tasks;
};

// Criar uma nova tarefa
export const createTask = async (context: Context) => {
  const body = await context.request.body();
  const { title } = await body.value;

  if (!title) {
    context.response.status = 400;
    context.response.body = { error: "Title is required" };
    return;
  }

  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };

  tasks.push(newTask);
  context.response.status = 201;
  context.response.body = newTask;
};

// Atualizar uma tarefa
export const updateTask = async (context: Context) => {
  const { id } = context.params || {};
  const body = await context.request.body();
  const { title, completed } = await body.value;

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    context.response.status = 404;
    context.response.body = { error: "Task not found" };
    return;
  }

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  context.response.body = task;
};

// Deletar uma tarefa
export const deleteTask = (context: Context) => {
  const { id } = context.params || {};

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    context.response.status = 404;
    context.response.body = { error: "Task not found" };
    return;
  }

  tasks.splice(taskIndex, 1);
  context.response.status = 204;
};