import addTask from "./components/addTask.js";
import renderTasks from "./components/Render.js";
import Login from "./login.js";

Login();
export const renderAfter = () => {
  const token = localStorage.getItem("token");

  if (token) {
    document.getElementById("mainPage").innerHTML = `<h1 style="
        color: #ff6ba3;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
          'Lucida Sans', Arial, sans-serif;
        font-size: 4rem;
        margin-bottom: 20px;
        font-weight: bold;
      ">
      to Do list
    </h1>
    <div class="container">
      <div class="bakhshinput">
        <input class="input" id="taskInput" type="text" placeholder="Add a task" />
        <button class="button" id="addBtn" >Add Task</button>
      </div>
      <ul class="ul" id="taskList"></ul>
    </div>`;
    const addBtn = document.getElementById("addBtn");

    // اضافه کردن Event Listener برای دکمه
    addBtn.addEventListener("click", () => addTask());
    renderTasks();
  }
};
renderAfter();

// یه بار این فانکشن رو صدا میزنیم که تسک هارو از بک اند فچ کنیم در اول اپلیکیشن
// getTasks();

// اولین بار نمایش
