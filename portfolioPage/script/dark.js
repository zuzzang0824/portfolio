    // dark, light mode
    const dark = document.querySelector('#dark');//dark btn
    const light = document.querySelector('#light');//light btn
    const hoverEventA = document.querySelectorAll('main .main1 #main1-container li a');

    // webkit stroke
    const Wstroke1px = document.querySelectorAll('.Wstroke1px');
    const Wstroke = document.querySelectorAll('.Wstroke');

    // image change
    const github = document.querySelector('#github_icon');
    const velog = document.querySelector('#velog_icon');
    const instagram = document.querySelector('#instagram_icon');
    const arrowBox = document.querySelector('#arrowbox');
    
    // mouse move
    const circle = document.querySelector('.circle')

    const onMove = (e) =>{
        circle.style.left = `${e.pageX-8}px`
        circle.style.top = `${e.pageY-8}px`
    }

    addEventListener('mousemove', onMove);


    document.querySelector('#main1-container li');
    console.log(document.querySelector('#main1-container li'));

    // document.querySelector('#main1-container li').classList.add('active')
    
    hoverEventA.forEach(item => {
        item.addEventListener('mouseover',(e)=>{
            console.log(e.currentTarget);
           e.currentTarget.parentNode.classList.add('hoverEvent')
        })
    });


    Wstroke1px.forEach(Wstroke1px => {
        dark.addEventListener('click', () => {
            Wstroke1px.style.webkitTextStroke ='1px #fff'
            Wstroke1px.style.webkitTextFillColor = 'transparent';
        });
    });
    dark.addEventListener('click', () => {
        document.body.classList.add('active');
        document.querySelector('.contact_a').classList.add('on');
        Wstroke.forEach(Wstroke=>{
            
            // stroke text color change
            Wstroke.style.webkitTextStroke ='2px #fff'
            Wstroke.style.webkitTextFillColor = 'transparent';
            
            // img color change
            github.innerHTML = '<img src="./images/Wgithub.svg" alt="github" id="github_icon" width="30px">';
            velog.innerHTML = '<img src="./images/Wvelog.svg" alt="velog" width="31px">';
            instagram.innerHTML = '<img src="./images/Winstagram.svg" alt="instagram" id="instagram_icon" width="30px">';   
            
            arrowBox.innerHTML ='<img src="./images/Warrow.svg" alt="arrow">';
            document.querySelector('#light').src = './images/Wlight.svg'
            document.querySelector('#dark').src = './images/Wdark.svg'

             // remove .active
            light.addEventListener('click',()=>{
            document.body.classList.remove('active');
            document.querySelector('.contact_a').classList.remove('on');
            });
        });
        
    });

// dark -> light
Wstroke1px.forEach(Wstroke1px => {
    light.addEventListener('click', () => {
        Wstroke1px.style.webkitTextStroke ='1px #000'
        Wstroke1px.style.webkitTextFillColor = 'transparent';
    });
});
light.addEventListener('click', () => {
    Wstroke.forEach(Wstroke=>{
        // stroke text color change
        Wstroke.style.webkitTextStroke ='2px #000'
        Wstroke.style.webkitTextFillColor = 'transparent';
        
        // img color change
        github.innerHTML = '<img src="./images/github.svg" alt="github" id="github_icon" width="30px">';
        velog.innerHTML = '<img src="./images/velog.svg" alt="velog" width="31px">';
        instagram.innerHTML = '<img src="./images/instagram.svg" alt="instagram" id="instagram_icon" width="30px">';   
        
        arrowBox.innerHTML ='<img src="./images/arrow.svg" alt="arrow">';
        document.querySelector('#light').src = './images/light.svg'
        document.querySelector('#dark').src = './images/dark.svg'
    });
});