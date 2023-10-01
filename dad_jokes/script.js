const jokeText = document.getElementById("joke")
const joketBtn = document.getElementById("jokeBtn")

const getJokefunc = async() =>{

    // const config = {
    //     headers:{
    //         Accept: "application/json"
    //     }
    // }

    const res = await fetch("https://icanhazdadjoke.com",{ headers:{
        Accept: "application/json"
    }})
    const data = await res.json()
    //optional channing
    jokeText.innerHTML = data?.joke
}


joketBtn.addEventListener('click',getJokefunc)