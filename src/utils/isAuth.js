export default function isAuth() {
    let token = localStorage.getItem("token");
    if (token !== "Admin") {
      window.location.href = "../../index.html";
    }
}