const sumbit = document.getElementById("btn-sub");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password-2");
// const icon1 = document.getElementById("bx1");
// const icon2 = document.querySegetElementByIdlector("bx2");

span1 = document.getElementById("name-er");
span2 = document.getElementById("email-er");
span3 = document.getElementById("pass-er");
span4 = document.getElementById("pass2-er");

//Ocultar / mostar contraseña

// icon1.addEventListener("click", e => {
//     if(password.type === "password"){
//         password.type = "text";
//         icon1.classList.remove('bx-show');
//         icon1.classList.add('bx-hide');
//     } else {
//         password.type = "passowrd";
//         icon1.classList.add('bx-show');
//         icon1.classList.remove('bx-hide');
//     }
// })

// icon2.addEventListener("click", e => {
//     if(password2.type === "password"){
//         password2.type = "text";
//         icon2.classList.remove('bx-show');
//         icon2.classList.add('bx-hide');
//     } else {
//         password.type = "passowrd";
//         icon2.classList.add('bx-show');
//         icon2.classList.remove('bx-hide');
//     }
// })


let mensajeErr, nameOk, emailOk;
name.addEventListener("input", () =>{
    if(name.value != ""){
        mensajeErr = "";
        span1.innerHTML = mensajeErr;
    }
    if(name.value.length < 3) {
        mensajeErr = "El nombre debe contener al menos 3 caracteres";
        span1.innerHTML = mensajeErr;
        nameOk = false;
    }
    else{
        span1.innerHTML = "";
        nameOk = true;
    }
})

email.addEventListener("input", () =>{
    if(email.value != ""){
        mensajeErr = "";
        span2.innerHTML = mensajeErr;
    }
    if(email.value.indexOf("@gmail.com") == -1) {
        mensajeErr = "El email debe ser del formato @gmail.com";
        span2.innerHTML = mensajeErr;
        emailOk = false;
    }
    else{
        span2.innerHTML = "";
        emailOk = true;
    }
})

password.addEventListener("input", () => {
    if(password.value != ""){
        mensajeErr = "";
        span3.innerHTML = mensajeErr;
    }
})

password2.addEventListener("input", () => {
    if(password2.value != ""){
        mensajeErr = "";
        span4.innerHTML = mensajeErr;
    }
})

sumbit.addEventListener("click", (e) =>{
    let hayError = false;
    //Vaidación nombre
    if(name.value == ""){
        mensajeErr = "El campo esta vacío"
        span1.innerHTML = mensajeErr;
        hayError = true;
    }
    if(email.value == ""){
        mensajeErr = "El campo esta vacío";
        span2.innerHTML = mensajeErr;
        hayError = true;
    }
    if(password.value == ""){
        mensajeErr = "El campo esta vacío";
        span3.innerHTML = mensajeErr;
        hayError = true;
    }
    if(password2.value == ""){
        mensajeErr = "El campo esta vacío";
        span4.innerHTML = mensajeErr;
        hayError = true;
    }
    if(password2.value != ""){
        if(password2.value != password.value){
            mensajeErr = "Las contraseñas no coinciden";
            span4.innerHTML = mensajeErr;
            hayError = true;
        }
    }

    if(hayError || !nameOk || !emailOk){e.preventDefault();}
});

