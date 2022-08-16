const regexUrl = /(www|http:|https:|)+[^\s]+[\w]+[\com]/;

const inputLinkedin = document.querySelector('.social__input--linkedln');
const buttonNext = document.querySelector('.form__next');
let inputGithub = document.querySelector('#social__input--github');
const spanGithub = document.querySelector('.form__efect--github');
const spanLinkedin = document.querySelector('.form__efect--linkedin');

function formGitHub() {

    if (inputGithub.value == '') {
        incorrectEfect(inputGithub);
        defaulEfect(inputGithub);
        spanGithub.innerHTML = null;
        return
    }

    if (regexUrl.test(inputGithub.value)) {
        correctEfect(inputGithub);
        spanGithub.innerHTML = null;
    } else {
        incorrectEfect(inputGithub);
        incorrectEfect(spanGithub);
        spanGithub.innerHTML = 'Invalid Url!!';
    }
}

function formLinkedin() {

    if (inputLinkedin.value == '') {
        correctEfect(inputLinkedin);
        defaulEfect(inputLinkedin);
        spanLinkedin.innerHTML = null;
        return;
    }

    if (regexUrl.test(inputLinkedin.value)) {
        correctEfect(inputLinkedin);
        defaulEfect(inputLinkedin);
        spanLinkedin.innerHTML = null;
    } else {
        incorrectEfect(inputLinkedin);
        incorrectEfect(spanLinkedin);
        spanLinkedin.innerHTML = 'Invalid Url!!';
    }
}




