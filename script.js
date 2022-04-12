
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let alertElement = document.querySelector("#alert-container");


let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
} 

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide");
    alertElement.classList.add("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alertElement.classList.remove("hide");
    navigator.clipboard.writeText(novaSenha);
}

function closeBtn(){
    alertElement.classList.add("hide");
}