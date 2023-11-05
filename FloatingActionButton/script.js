const plusIcon = document.querySelector("#fab") 
const fabBtn = document.querySelector(".fab-btns")

plusIcon.addEventListener("click", ()=>{
    fabBtn.classList.toggle("show")
})