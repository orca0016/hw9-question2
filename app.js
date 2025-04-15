const form = document.getElementById("myform");
const inputContainer = document.querySelector(".input-container");
const passwordInput = document.getElementById("password-input");
const message = document.querySelector(".message");
const labelInput = document.querySelector(".label-input");

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


passwordInput.addEventListener('input' , (e)=>{
    const value = e.target.value
    console.log(value);
    
    const specialChars =
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numbersChars = /[0-9]/g;
    const upperCaseLetters = /[A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;

    if (!specialChars.test(value) || !numbersChars.test(value) || !lowerCaseLetters.test(value)|| !upperCaseLetters.test(value) || value.length < 8 ) {
        message.innerText = 'Min 8 character with  at insert  one capital letter  , a number and special character  . '
        message.classList.add('error-text')
        eyeIcon.classList.add('error-text')
        passwordInput.classList.add('input-error')
        labelInput.classList.add('error-text')
        
    }else{
        message.innerText = 'password is good :)'
        passwordInput.classList.remove('input-error')
        message.classList.remove('error-text')
        eyeIcon.classList.remove('error-text')
        labelInput.classList.remove('error-text')
    }
    if (value===''){
        message.innerText = 'password input is empty'
        passwordInput.classList.remove('input-error')
        message.classList.remove('error-text')
        eyeIcon.classList.remove('error-text')  
        labelInput.classList.remove('error-text')
    }
        
})