const container = document.getElementById('container');
const registarBtn =document.getElementById('register');
const  loginBtn = document.getElementById('Login');

registarBtn.addEventListener('click' , ()=> {

    container.classList.add("active");
});

loginBtn.addEventListener('click' , ()=> {

    container.classList.remove("active");
});