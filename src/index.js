import './style.css'

const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

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