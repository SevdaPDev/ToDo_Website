import { renderAfter } from "./main.js";

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
     console.log(newUser);
    

    res = await fetch("http://46.100.94.88:3003/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    data = await res.json();
    console.log(res.ok);
    console.log(data.accessToken);
    localStorage.setItem("token", data.accessToken);
  };
};

export default Login;
