function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const validCredentials = validateCredentials(usernameInput, passwordInput);

  if (validCredentials) {

    const token = 'Admin';

    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 20);

    document.cookie = `token=${token} expires=${expirationTime.toUTCString()}; path=/index.html`
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime.getTime().toString());
    window.location.href = "./src/views/sales.html";

  } else {
    alert("Invalid username or password.");
  }
}

function validateCredentials(username, password) {
  if (username === "admin" && password === "admin") {
    return true;
  }
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    login();
  });
});
