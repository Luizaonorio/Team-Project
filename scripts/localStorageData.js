const certificates = {};
const certificatesFavoriteObj = {};

function load() {
    month();
    day();
    year();
    show();
    validationNome();
    validationNickName();
    validationEmail();
    validationPhone();
    validationBirthdayDay();
    validationBirthdayMonth();
    validationBirthdayYear();
    formGitHub();
    formLinkedin();
    validationTeamName();
    validationInstituition();
    validationGraduation();
    fisrtPageBlock();
    secondyPageBlock();
    thirdPageBlock();
}

function save() {
    localStorage.setItem('info_fN', document.getElementById('full__name').value);
    localStorage.setItem('info_nN', document.getElementById('basic__nickname').value);
    localStorage.setItem('info_ema', document.getElementById('basic__email').value);
    localStorage.setItem('info_phone', document.getElementById('basic__phone').value);
    localStorage.setItem('info_birt_day', document.getElementById('date__day').value);
    localStorage.setItem('info_birt_month', document.getElementById('date__month').value);
    localStorage.setItem('info_birt_year', document.getElementById('date__year').value);
    localStorage.setItem('info_age', document.getElementById('date__age').value);
    localStorage.setItem('info_lin', document.getElementById('get__linkedln').value);
    localStorage.setItem('info_git', document.getElementById('social__input--github').value);
    localStorage.setItem('info_team', document.getElementById('team__name').value);
    localStorage.setItem('info_inst', document.getElementById('institution').value);
    localStorage.setItem('info_grad', document.getElementById('graduation').value);
    localStorage.setItem('info_cert_Favorite', JSON.stringify(certificatesFavoriteObj))
    localStorage.setItem('info_cert', JSON.stringify(certificates))
}

function show() {

    let fN = localStorage.getItem('info_fN');
    document.querySelector('#full__name').value = fN;
    document.getElementById('p_name').innerHTML = fN;

    let nN = localStorage.getItem('info_nN');
    document.querySelector('#basic__nickname').value = nN;
    document.getElementById('p_nickname').innerHTML = nN;

    let email = localStorage.getItem('info_ema')
    document.querySelector('#basic__email').value = email;
    document.getElementById('p_email').innerHTML = email;

    let phone = localStorage.getItem('info_phone')
    document.querySelector('#basic__phone').value = phone;
    document.getElementById('p_phone').innerHTML = phone;

    let day = localStorage.getItem('info_birt_day');
    let month = localStorage.getItem('info_birt_month');
    let year = localStorage.getItem('info_birt_year');

    if (!day == '')
        document.getElementById('date__day').value = day;

    if (!month == '')
        document.getElementById('date__month').value = month;


    if (!year == '')
        document.querySelector('#date__year').value = year;

    document.getElementById('p_birthday').innerHTML = `${day} / ${month} / ${year}`;

    let age = localStorage.getItem('info_age');
    document.querySelector('#date__age').value = age;
    document.getElementById('p_age').innerHTML = age;

    let linkedln = localStorage.getItem('info_lin');
    document.querySelector('#get__linkedln').value = linkedln;
    document.getElementById('p_linkedln').innerHTML = linkedln;

    let github = localStorage.getItem('info_git');
    document.querySelector('#social__input--github').value = github;
    document.getElementById('p_github').innerHTML = github;

    let team = localStorage.getItem('info_team');
    document.querySelector('#team__name').value = team;
    document.getElementById('p_team').innerHTML = team;

    let inst = localStorage.getItem('info_inst');
    document.querySelector('#institution').value = inst;
    document.getElementById('p_inst').innerHTML = inst;

    let grad = localStorage.getItem('info_grad');
    document.querySelector('#graduation').value = grad;
    document.getElementById('p_grad').innerHTML = grad;

    if (localStorage.info_nN === null || localStorage.info_nN === undefined || localStorage.info_nN === "") {
        document.getElementById('p_nickname').innerHTML = '-';
    }

    if (localStorage.info_ema === null || localStorage.info_ema === undefined || localStorage.info_ema === "") {
        document.getElementById('p_email').innerHTML = '-';
    }

    if (localStorage.info_phone === null || localStorage.info_phone === undefined || localStorage.info_phone === "") {
        document.getElementById('p_phone').innerHTML = '-';
    }

    if (localStorage.info_lin === null || localStorage.info_lin === undefined || localStorage.info_lin === "") {
        document.getElementById('p_linkedln').innerHTML = '-';
    }
}

function salveCertificates() {
    const certiList = document.querySelectorAll('.cert');
    const certiElement = document.getElementById('p_cert');

    let cert1 = localStorage.getItem('info_cert');
    let cert2 = localStorage.getItem('info_cert_Favorite');

    let orderFavorite = 0;
    let orderRegular = 0;

    let certificatesRegular = JSON.parse(cert1);
    let certificatesFavorite = JSON.parse(cert2);

    for (let i = 0; i < certiList.length; i++) {

        if ((!certiList[i].value == '') && (!certiList[i].classList.contains('orderFav'))) {
            certificatesRegular[orderRegular] = certiList[i].value;
            orderRegular++;
        }
    }

    for (let i = 0; i < certiList.length; i++) {

        if (certiList[i].classList.contains('orderFav')) {
            certificatesFavorite[orderFavorite] = certiList[i].value;
            orderFavorite++;
        }
    }

    let tamanhoCert1 = Object.keys(certificatesRegular).length;
    let tamanhoCert2 = Object.keys(certificatesFavorite).length;

    for (let i = 0; i < tamanhoCert2; i++) {
        certiElement.innerHTML += `
        <div class='certificates__storage'>
            <div>${certificatesFavorite[i]}</div> <span class="form__heart blue__heart"></span>
        </div>`
    }

    for (let i = 0; i < tamanhoCert1; i++) {
        certiElement.innerHTML += `
        <div class='certificates__storage'>
            <div>${certificatesRegular[i]}</div> <span class="form__heart"></span>
        </div>`
    }
}


