document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('#arrow');
    const santa = document.querySelector('#santaGlobo');
 

    santa.style.width = '60%'
    santa.style.margin = 'auto'
    santa.style.position = 'relative';
    let santa_position = window.innerHeight;
    santa.style.top = `${santa_position}px`;
    const santaImgHeight = -santa.clientHeight;
    
    santa.style.display = 'none'
    
    startButton.addEventListener('click', () => {
        const audio = new Audio();
        audio.src = './media/mp3/4.mp3';
        audio.play();
        
        santa.style.display = 'block';
        const timeOutId = setInterval(() => {
            if (santa_position > santaImgHeight ) {
                santa_position--;
                santa.style.top = `${santa_position}px`;
                
                if(isSantaOutOfScreen(santa_position)){
                    const presentationDiv = document.querySelector('.presentation');
                    presentationDiv.classList.add('puff-out-hor');
                    setTimeout(() => {
                        presentationDiv.style.display = 'none';
                    }, 2000)
                }
    
            }else{
                clearInterval(timeOutId);
            }
        }, 2);

    })

    function isSantaOutOfScreen (currentPosition) {
        return currentPosition === santaImgHeight;
    }
})
