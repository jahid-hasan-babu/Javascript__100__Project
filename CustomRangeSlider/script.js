const rangrSlider = document.querySelector("input");
const valueEl = document.querySelector(".value");
valueEl.textContent = rangrSlider.value;


rangrSlider.addEventListener("input", (e)=>{
    if(e.target.value < 10){
    valueEl.textContent = "0" + e.target.value;

    }else{
        valueEl.textContent = e.target.value;
    }
    
})