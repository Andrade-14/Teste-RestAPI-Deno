import { Task, tasks } from "../models/task.ts";
import { RouterContext } from "https://deno.land/x/oak@v12.6.1/mod.ts";

// GET /tasks
export const getAllTasks = (ctx: RouterContext) => {
  ctx.response.body = tasks;
};

// GET /tasks/:id
export const getTaskById = (ctx: RouterContext) => {
  const task = tasks.find(t => t.id === ctx.params.id);
  if (!task) ctx.throw(404, "Task not found");
  ctx.response.body = task;
};

// POST /tasks
export const createTask = async (ctx: RouterContext) => {
  const { title } = await ctx.request.body().value;
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false
  };
  tasks.push(newTask);
  ctx.response.status = 201;
  ctx.response.body = newTask;
};

// DELETE /tasks/:id
export const deleteTask = (ctx: RouterContext) => {
  const index = tasks.findIndex(t => t.id === ctx.params.id);
  if (index === -1) ctx.throw(404, "Task not found");
  tasks.splice(index, 1);
  ctx.response.status = 204;
};