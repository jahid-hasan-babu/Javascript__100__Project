const password = document.querySelector("#password")
const eye = document.querySelector("#eye")


eye.addEventListener("click",showPass)

function showPass(){
    if(eye.classList.contains("fa-eye")){
        password.setAttribute("type", "text")
        eye.classList.replace("fa-eye", "fa-eye-slash")
    }else{
        password.setAttribute("type", "password")
        eye.classList.replace("fa-eye-slash", "fa-eye")
    }
}

