const form = document.querySelector("form");
const username = document.getElementsById("username");
const password = document.getElementsById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    const usernamevalue = username.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
}