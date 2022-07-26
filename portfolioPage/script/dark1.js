    // dark, light mode
    const colorModeBtnL = document.querySelector('.color-mode #lb');
    const colorModeBtnD = document.querySelector('.color-mode #db');
    const dark = document.querySelector('#dark');//dark btn
    const light = document.querySelector('#light');//light btn
    const lb = document.querySelector('#lb');//lb

    // webkit stroke
    const Wstroke1px = document.querySelectorAll('.Wstroke1px');
    const Wstroke = document.querySelectorAll('.Wstroke');

    // image change
    const github = document.querySelector('#github_icon');
    const velog = document.querySelector('#velog_icon');
    const instagram = document.querySelector('#instagram_icon');
    const arrowBox = document.querySelector('#arrowbox');

    lb.addEventListener('click',()=>{
        document.body.classList.remove('active');
    });

    Wstroke1px.forEach(Wstroke1px => {
        dark.addEventListener('click', () => {
            Wstroke1px.style.webkitTextStroke ='1px #fff'
            Wstroke1px.style.webkitTextFillColor = 'transparent';
        });
    });
    

    Wstroke.forEach(Wstroke => {
        dark.addEventListener('click', () => {
            document.body.classList.add('active');
            document.querySelector('.contact_a').classList.add('on');

            // stroke text color change
            Wstroke.style.webkitTextStroke ='2px #fff'
            Wstroke.style.webkitTextFillColor = 'transparent';
    
            // img color change
            github.innerHTML = '<img src="./images/Wgithub.svg" alt="github" id="github_icon" width="30px">';
            velog.innerHTML = '<img src="./images/Wvelog.svg" alt="velog" width="31px">';
            instagram.innerHTML = '<img src="./images/Winstagram.svg" alt="instagram" id="instagram_icon" width="30px">';   
            
            arrowBox.innerHTML ='<img src="./images/Warrow.svg" alt="arrow">';

            colorModeBtnL.innerHTML = '<img src="./images/Wlight.svg" alt="light" id="light">'
            colorModeBtnD.innerHTML = '<img src="./images/Wdark.svg" alt="dark" id="dark">'
        });
    });
