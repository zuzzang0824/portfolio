// mouse move
const circle = document.querySelector('.circle');
const aTag = document.querySelectorAll('a');

// cursor event
const onMove = (e) =>{
    circle.style.left = `${e.pageX-8}px`
    circle.style.top = `${e.pageY-8}px`
    
    aTag.forEach(item => {
        item.addEventListener('mouseenter',()=>{
            circle.classList.add('cursor_scale');
        });
        item.addEventListener('mouseleave',()=>{circle.classList.remove('cursor_scale');
        });
    });
}
addEventListener('mousemove', onMove);