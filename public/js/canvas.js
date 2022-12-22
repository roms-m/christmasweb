
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //images
    const imgBack = './media/img/mc.svg';

    //canvas sizes
    if(window.innerWidth >= 600 && window.innerWidth <= 991){
        canvas.width = 620;
    }else if(window.innerWidth >= 992){
        canvas.width = 380;
    }else{
        /* canvas.width = 380; */
        canvas.width = window.innerWidth;
    }

    canvas.height = window.innerHeight;
    
    function init(){
        const backgroundImg = new Image();

        backgroundImg.onload = () => {
            ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
        }
        
        backgroundImg.src = imgBack;
    }
    
    init();
});