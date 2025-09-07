// اینجا به جای این که بیایم از لوکال استوریج بگیریم دیتارو میایم دیتایی که از بک اند فچ کردیم رو میگیرم و باقیش روال عادیه
import deleteTask from "./deleteTask.js";
import { BASE_URL } from "../BaseUrl.js";

const renderTasks = () => {
  let tasks = [];
  const token = localStorage.getItem("token");
  const getTasks = async () => {
    const res = await fetch(`${BASE_URL}/task/getTasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });
    const data = await res.json();
    console.log(data);
    tasks = data;
  };

   try {
    getTasks()
  } catch (error) {
    console.log(error);
  }

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const RenderGetedTasks = () => {
    console.log(tasks);

    tasks.forEach((task) => {
      const div = document.createElement("div");
      const li = document.createElement("li");
      li.classList.add("task-item");

      const span = document.createElement("span");
      span.textContent = task.title;

      const btn = document.createElement("button");
      btn.classList.add("delete-btn");
      btn.textContent = "Delete";
      btn.addEventListener("click", () => deleteTask(task.id));

      li.appendChild(span);
      li.appendChild(btn);
      div.appendChild(li);
      list.appendChild(div);
    });
  };
  RenderGetedTasks();
};

export default renderTasks;
