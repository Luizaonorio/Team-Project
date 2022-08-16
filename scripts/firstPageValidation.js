const inputForm = document.querySelectorAll('.form__input--basic');
const spanEfect = document.querySelectorAll('.form__efect');
const inputCheckBox = document.querySelector('#input__terms');

$('#basic__phone').mask("(99) 99999-9999")

function validationNome() {
    let maskName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

    if(inputForm[0].value == ''){
        efectForm('Full Name', 'default');
        return 
    } 

    if (maskName.test(inputForm[0].value)) {
        efectForm('Full Name', 'correct');
    } else {
        efectForm('Full Name', 'incorrect', 'Invalid Name!!');
    }
}

function validationNickName() {
    if (inputForm[1].value == '') {
        defaulEfect(inputForm[1])
    } 
}

function validationEmail() {
    let maskEmail = /\S+@\S+\.\S+/;

    if(inputForm[2].value == ''){
        efectForm('Email', 'default');
        return 
    } 

    if (maskEmail.test(inputForm[2].value)) {
        efectForm('Email', 'correct');
    } else {
        efectForm('Email', 'incorrect', 'Invalid Email!!');
    }
}

function validationPhone() {
    if (inputForm[3].value == '') 
        defaulEfect(inputForm[3])
}


