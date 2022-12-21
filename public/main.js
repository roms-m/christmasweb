document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('#start_btn');
    const canvas = document.querySelector('#canvas');

    canvas.style.opacity = '0';
    
    startButton.addEventListener('click', () => {
        const presentationDiv = document.querySelector('.presentation');

        presentationDiv.classList.add('slide-out-blurred-top');
        canvas.style.opacity = '1';
    })
})