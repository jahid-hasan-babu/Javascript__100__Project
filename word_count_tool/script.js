const input = document.querySelector(".input")
const character = document.querySelector(".character")
const word = document.querySelector(".word")
const wordLimit = document.querySelector(".word-limit")
const readingTime = document.querySelector(".reading-time")
const word__Limit = 10


input.addEventListener("keyup", countCharacters)
input.addEventListener("keyup", countWords)

function countCharacters() {
    character.innerHTML = input.value.length
}

function countWords(){
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

    if(words){
        word.innerHTML = words.length;
        wordLimit.innerHTML = word__Limit - words.length
    }else{
        word.innerHTML = 0;
    }
    if(words){
        let second = Math.floor((words.length * 60) / 225)
        if(second > 59){
            let mins = Math.floor(second/60);
            second = second - mins * 60;
            readingTime.innerHTML = mins + " Mins" + second + " Second";
        }else{
            readingTime.innerHTML = second + " Second";
        }
    }else{
        readingTime.innerHTML = "0 Second"
    }
}