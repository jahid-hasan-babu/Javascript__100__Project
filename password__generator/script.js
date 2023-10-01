const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

const pLength = document.getElementById("p-length"),
  upperCase = document.getElementById("p-uppercase"),
  lowerCase = document.getElementById("p-lowercase"),
  pNumber = document.getElementById("p-number"),
  pSymbol = document.getElementById("p-symbol"),
  submit = document.getElementById("submit"),
  password = document.getElementById("password"),
  copy = document.getElementById("copy");


let initalPass = ""

submit.addEventListener('click', checkReq)
copy.addEventListener('click', clickCopy)

function checkReq(){
    upperCase?.checked ? (initalPass += uCase) : "";
    lowerCase?.checked ? (initalPass += lCase) : "";
    pNumber?.checked ? (initalPass += number) : "";
    pSymbol?.checked ? (initalPass += symbol) : "";


    password.value = generatePass(initalPass, pLength?.value)
}

function generatePass(initalPass, l){
    let pass = "";
    for(let i = 0; i < l; i++){
        pass += initalPass.charAt(Math.floor(Math.random() * initalPass.length))
    }
    return pass
}

function clickCopy(){
    if(password == ""){
        alert("Please Generate a password first")
    }else{
        password.select();
        document.execCommand("copy")
        alert("Password has been copied")
    }
}