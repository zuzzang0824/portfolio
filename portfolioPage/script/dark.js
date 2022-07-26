// color mode
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');

const Wstroke = document.querySelectorAll('.Wstroke');
const Wstroke1px = document.querySelectorAll('.Wstroke1px');
const Contact = document.querySelector('.Contact');
const before = document.querySelector('');

const contactTxt = document.querySelector('.info p');

const github = document.querySelector('#github_icon');
const velog = document.querySelector('#velog_icon');
const instagram = document.querySelector('#instagram_icon');
const arrow = document.querySelector('#arrow');

// dark mode

Wstroke.forEach(Wstroke => {
    dark.addEventListener('click', () => {
        // body color change
        document.body.style.backgroundColor = '#000';

        // text color change
        document.body.style.color = '#fff';
        light.style.backgroundColor = '#fff'; 
        dark.style.backgroundColor = '#fff'; 
    
        // stroke text color change
        Wstroke.style.webkitTextStroke ='2px #fff'
        Wstroke.style.webkitTextFillColor = 'transparent';

        // contact (a) color change
        Contact.style.color = '#fff';

        // img color change
        github.innerHTML = '<img src="./images/Wgithub.svg" alt="github" id="github_icon" width="30px">';
        velog.innerHTML = '<img src="./images/Wvelog.svg" alt="velog" width="31px">';
        instagram.innerHTML = '<img src="./images/Winstagram.svg" alt="instagram" id="instagram_icon" width="30px">';

        arrow.innerHTML = '<img src="./images/arrow.svg" alt="arrow"> <div class="info"><p>이주현</p><p>수원여자대학교 시각디자인학과 미디어디자인 졸업</p><p>+82 10 8006 3955</p><p>tosuni0824@gmail.com</p>';

        // footer contact color change
        contactTxt.style.color ="red";
    });
});

Wstroke1px.forEach(Wstroke1px => {
    dark.addEventListener('click', () => {
        Wstroke1px.style.webkitTextStroke ='1px #fff'
        Wstroke1px.style.webkitTextFillColor = 'transparent';
    });
});









//light mode
Wstroke.forEach(Wstroke => {
    light.addEventListener('click', () => {
        document.body.style.backgroundColor = '#fff';

        document.body.style.color = '#000';
    
        Wstroke.style.webkitTextStroke ='2px #000'
        Wstroke.style.webkitTextFillColor = 'transparent';
    });
});

