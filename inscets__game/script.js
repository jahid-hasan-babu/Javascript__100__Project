const screens = document.querySelectorAll('.screen');
const insectBtn = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn')
const gameContainer = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}


startBtn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

insectBtn.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = {
            src,
            alt
        }
        screens[1].classList.add('up')
        setTimeout(createInsects, 1000)
        startGame()
    })
})


const createInsects = () =>{
    const insect = document.createElement("div")
    insect.classList.add('insect')
    const {x, y} = randomLocation()

    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsects)
    gameContainer.appendChild(insect)
}

const randomLocation = () => {
    const width = window.innerWidth;
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return{x,y}
}

function startGame(){
    setInterval(increaseTime, 1000)
}


function increaseTime(){
    let m = Math.floor(`${seconds / 60}`)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
    

    // if(m >= 1){
    //     clearInterval(increaseTime)
    //     gameOver()
    // }
}


function catchInsects(){
    increaseScore()
    this.classList.add('caught')
    setTimeout(()=> this.remove(), 1000)
    addInsects()
}


function increaseScore() {
    score++
    if(score >= 30) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}

function addInsects(){
    setTimeout(createInsects, 1000)
    setTimeout(createInsects, 1500)
}

function gameOver(){
    const overEl = document.createElement("div")
    overEl.innerHTML = `<h2>GAME OVER</h2>`
    gameContainer.appendChild(overEl)

}