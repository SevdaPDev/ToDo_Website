import { renderAfter } from "./main.js";
import { BASE_URL } from "./BaseUrl.js";

const Login = () => {
  let username;
  let password;
  let email;
  let res;
  let data;
  let newUser = {};
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    newUser = {
      username: username,
      email: email,
      password: password,
    };
    const errorMessage = document.getElementById("errorMessage");
    LoginForm();
    renderAfter();
  });

  const LoginForm = async () => {
    res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    data = await res.json();
    localStorage.setItem("token", data.accessToken);
    renderAfter();
  };
};

export default Login;
