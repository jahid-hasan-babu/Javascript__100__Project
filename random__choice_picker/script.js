const textArea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');


textArea.focus()


textArea.addEventListener('keyup', (e)=>{

    createTags(e.target.value) 

    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ""
        },10)
        randomSelect()
    }
})

function createTags (input){
    const tags = input.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim())

    tagsEl.innerHTML = ""

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });
}


function randomSelect () {
    const times = 30;
    const interval = setInterval (() => {
            const randomTag = pickRandom()
            if(randomTag !== undefined){
                highLightTag(randomTag)
            }
     setTimeout (() => {
        unhighLightTag(randomTag)
     },100)
        
    },100)
    setTimeout(()=>{
        clearInterval(interval)

        setTimeout (()=>{
            const randomTag = pickRandom()
            highLightTag(randomTag)
        },100)
    },times * 100)
}


function pickRandom () {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag (tag){
    tag.classList.add('highlight')
}

function unhighLightTag (tag){
    tag.classList.remove('highlight')
}