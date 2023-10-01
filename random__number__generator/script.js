const number = document.querySelector('.number')
const btn = document.querySelector('.generate')


const generateRandomNumber = () =>{
    const newNumber = Math.floor(Math.random() * 100)
    number.innerHTML = newNumber
}

btn.addEventListener('click', generateRandomNumber)