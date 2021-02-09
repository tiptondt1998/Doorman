/* import log4js from "log4js"
const logger = log4js.getLogger("logs"); */


const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login").value.trim();
  const passwordEl = document.querySelector("#password-login").value.trim();
  fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
  .then(function() {
    document.location.replace("/");
  })
  .catch(err => console.log(err));
}

/* async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        username,

        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
} */

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

/* document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler); */