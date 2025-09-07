// خب این ماژول دیگه به درد نمیخوره چون ما کلا دیگه با لوکال استوریج کاری نداریم به جاش اسم این کامپوننت رو تغییر میدیم به دیتا و دیتایی که از بک اند فچ میکنیم رو اینجا فچ میکنیم و توی کامپوننت های دیگه ازش استفاده میکنیم

import { BASE_URL } from "../BaseUrl.js";

// برای مثال

export let tasks = [];
// اینجا میزاریمش داخل یه فانکشن که یتونیم این فانکشن رو اکسپورت کنیم اگه نیاز بود ولی قراره فقط آرایه تسکس رو اکسپورت کنیم با باقیش کاری نداریم

export const getTasks = () => {
  const GetTasks = async () => {
    res = await fetch(`${BASE_URL}/tasks/getTasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(newUser),
      // اینجا دیگه بادی نداریم چون بادی یعنی این شکل رو برات میفرستم ولی اینجا شکلی دریافت میکنیم
    });
    data = await res.json();
    console.log(res.ok);
    tasks = data;
  };
};
// چون فانکشنه پس یه بار باید صدا زده بشه که بتونه دیتارو فچ کنه از بک اند برای همین توی main.js یه بار این فانکشن رو صدا میزنیم چون این ماژول همون اول یه بار اجرا میشه

export const getTasksFromStorage = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const saveTasksToStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
