import renderTasks from "./Render.js";

const addTask = () => {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  // const tasks = اینجا فچ هارو از بک اند فچ میکنیم
  const newTask = {
    title: taskText,
  };

  const token = localStorage.getItem("token");
  console.log(token);
  

  const createTask = async () => {
    const res = await fetch("http://46.100.94.88:3003/task/createTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    console.log(data, res.ok);
  };

  try {
    createTask();
    input.value = "";
  } catch (error) {
    console.log(error);
  }
  //  این آبجکت رو به شکل جیسون میفرستیم به بک اند

  renderTasks();
};

export default addTask;
