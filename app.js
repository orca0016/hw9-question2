const form = document.getElementById("myform");
const inputContainer = document.querySelector(".input-container");
const passwordInput = document.getElementById("password-input");
const message = document.querySelector(".message");

const eyeIcon = document.createElement("i");
eyeIcon.classList.add("fa");
eyeIcon.classList.add("fa-eye");
eyeIcon.classList.add("eye-style");
eyeIcon.ariaHidden = "true";

eyeIcon.addEventListener("click", () => {
  eyeIcon.classList.toggle("fa-eye");
  eyeIcon.classList.toggle("fa-eye-slash");

  //   change type input
  passwordInput.getAttribute("type") === "text"
    ? passwordInput.setAttribute("type", "password")
    : passwordInput.setAttribute("type", "text");
});
inputContainer.appendChild(eyeIcon);

