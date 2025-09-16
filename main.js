import addTask from "./components/addTask.js";
import renderTasks from "./components/Render.js";
import Login from "./login.js";

export const renderAfter = () => {
  const token = localStorage.getItem("token");
  console.log(null == false);

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
        <button id="logouBtn">delet token</button>
      </div>
      <ul class="ul" id="taskList"></ul>
    </div>`;
    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", () => addTask());
    renderTasks();
    document.getElementById("logouBtn").addEventListener("click", () => {
      localStorage.removeItem("token");
      alert("توکن پاک شد");
      renderAfter();
    });
  } else {
    document.getElementById(
      "mainPage"
    ).innerHTML = `<form class="loginForm" id="loginForm">
      <p class="p">login</p>
      <input class="username" type="text" id="username" placeholder="نام کاربری" required>
      <input type="password" id="password" placeholder="رمز عبور" required>
      <input type="email" id="email" placeholder="ایمیل" required>
      <button class="submit" type="submit">sign in</button>
      <p class="error" id="errorMessage"></p>
    </form>`;
    Login();
  }
};
renderAfter();

// یه بار این فانکشن رو صدا میزنیم که تسک هارو از بک اند فچ کنیم در اول اپلیکیشن
// getTasks();

// اولین بار نمایش
