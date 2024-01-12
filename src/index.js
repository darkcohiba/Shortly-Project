import './style.css'

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')


const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

btn.addEventListener('click', navToggle)
linkForm.addEventListener('submit', formSubmit)

function formSubmit(e){
    e.preventDefault()
    
    if (input.value === ""){
        errMsg.textContent = "Field cannot be empty"
        input.classList.add('border-red')
    }else{
        errMsg.textContent = ""
        input.classList.remove('border-red')
    }
}

function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')


}