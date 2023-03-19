// Escondendo e Exibindo a senha
const IconVisible = document.querySelector(".ph-eye")
const iconHiden = document.querySelector(".ph-eye-slash")
const inputShowPassword = document.querySelector(".inputShowPassword")
const inputPassword = document.querySelector("#inputPassword")
const pErros = document.querySelector(".textNone")

function showPassword(){
    if(inputPassword.type == "password"){
        inputPassword.setAttribute("type","text")
        IconVisible.classList.replace("ph-eye","ph-eye-slash")
    } else {
        inputPassword.setAttribute("type","password")
        IconVisible.classList.replace("ph-eye-slash","ph-eye")
    }
}

IconVisible.addEventListener("click",()=>{
    showPassword()
})