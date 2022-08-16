const spanBirtday = document.querySelectorAll('.form__efect--birthday');
const inputDay = document.getElementById('date__day');
const inputMonth = document.getElementById('date__month');
const inputYear = document.getElementById('date__year');

function validationBirthdayDay() {

    if (inputDay.value == 0) {
        removeEfect(inputDay)
        return
    }

    if (inputDay.value != 'Day') efectBirthdayDay('correct')

    validationBirthday();
}

function validationBirthdayMonth() {

    if (inputMonth.value == '') {
        removeEfect(inputMonth)
        return
    }

    if (inputMonth.value != 'Month') efectBirthdayMonth('correct')

    validationBirthday();
}

function validationBirthdayYear() {

    if (inputYear.value == '') {
        removeEfect(inputYear)
        return
    }

    if (inputYear.value != 'Year') efectBirthdayYear('correct')

    validationBirthday();
}

function validationBirthday() {

    if (inputDay.value != 'Day' && inputMonth.value != 'Month' && inputYear.value != 'Year')
        calculateAge(inputDay.value, inputMonth.value, inputYear.value)
}


function calculateAge(day, month, year) {

    const inputAge = document.querySelector('#date__age');

    const dateA = new Date();
    const monthA = dateA.getMonth() + 1;
    const yearA = dateA.getFullYear();
    const dayA = dateA.getDate();

    let age = yearA - year;

    if (monthA < month || monthA == month && dayA < day) {
        age--;
    }

    inputAge.value = age;
}
