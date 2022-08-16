const inputTeamName = document.getElementById('team__name');
const inputInstitution = document.getElementById('institution');
const inputGraduation = document.getElementById('graduation');
const spanCertificates = document.querySelectorAll('.form__efect--certificates');

const maskValidation = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

function validationTeamName() {

    if (inputTeamName.value == '') {
        incorrectEfect(inputTeamName);
        defaulEfect(inputTeamName);
        spanCertificates[0].innerHTML = null;
        return
    }

    if (inputTeamName.value.length > 4) {
        correctEfect(inputTeamName)
        spanCertificates[0].innerHTML = null
    }

    if (inputTeamName.value.length < 4) {
        incorrectEfect(inputTeamName)
        incorrectEfect(spanCertificates[0])
        spanCertificates[0].innerHTML = 'Invalid Team Name!!'
    }
}

function validationInstituition() {

    if (inputInstitution.value == '') {
        incorrectEfect(inputInstitution);
        defaulEfect(inputInstitution);
        spanCertificates[1].innerHTML = null;
        return
    }

    if (maskValidation.test(inputInstitution.value)) {
        correctEfect(inputInstitution)
        spanCertificates[1].innerHTML = null
    } else {
        incorrectEfect(inputInstitution)
        incorrectEfect(spanCertificates[1])
        spanCertificates[1].innerHTML = 'Invalid Institution!!'
    }
}

function validationGraduation() {

    if (inputGraduation.value == '') {
        incorrectEfect(inputGraduation);
        defaulEfect(inputGraduation);
        spanCertificates[2].innerHTML = null;
        return
    }

    if (maskValidation.test(inputGraduation.value)) {
        correctEfect(inputGraduation)
        spanCertificates[2].innerHTML = null
    } else {
        incorrectEfect(inputGraduation)
        incorrectEfect(spanCertificates[2])
        spanCertificates[2].innerHTML = 'Invalid Graduation!!'
    }
}


