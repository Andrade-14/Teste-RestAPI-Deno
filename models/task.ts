export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const tasks: Task[] = [
  { id: "1", title: "Aprender Deno", completed: false },
  { id: "2", title: "Criar uma API", completed: true },
];