import { getTasksFromStorage, saveTasksToStorage } from "./localStorage.js";
import renderTasks from "./Render.js";

const deleteTask = (id) => {
  const tasks = getTasksFromStorage();
  const newTasks = tasks.filter((task) => task.id !== id);
  saveTasksToStorage(newTasks);
  renderTasks();
};

export default deleteTask;
