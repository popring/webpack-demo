import base from './css/base.css';
let clicked = false;
window.addEventListener('click', function(){
    if(!clicked) {
        base.use();
    }else {
        base.unuse();
    }
    clicked = !clicked;
});
