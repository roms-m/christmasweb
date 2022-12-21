import updateCountdown from "./countdown.js";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //images
    const imgBack = './media/img/1.jpg';
    const logoImg = './media/img/logo.png';

    const icons = [
        { 
            icon: './media/img/noche_buena.png',
            sound: './media/mp3/sound.mp3',
            x: 20,
            y: window.innerHeight - 100
        },
        { 
            icon: './media/img/burrito.png',
            sound: './media/mp3/burrito_sabanero.mp3',
            x: 150,
            y: window.innerHeight - 100
        },
        { 
            icon: './media/img/campana_sobre_campana.png',
            sound: './media/mp3/campana_sobre_campana.mp3',
            x: 280,
            y: window.innerHeight - 100
        }
    ]

    //canvas sizes
    canvas.width = 380;
    canvas.height = window.innerHeight;    
    
    function init(){
        const logo = new Image();
        const backgroundImg = new Image();

        backgroundImg.onload = () => {
            ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
            drawText({
                text: 'Feliz Navidad ',
                textSize: '52px',
                fontFamily: 'Corinthia',
                x: 40,
                y: 60
            });

            drawText({
                text: 'te desea',
                textSize: '30px',
                fontFamily: 'Corinthia',
                x: 170,
                y: 90
            })
            drawSoundsSection();
        }
        
        logo.onload = () => {
            ctx.drawImage(logo, 100, 100, 180, 100);
        }
        
        
        backgroundImg.src = imgBack
        logo.src = logoImg;
        /* addEventToImgIcons(); */
    }

    function drawText({ text = '', weight = 'normal',color = 'white', fontFamily = 'Arial', textSize = '', x = 0, y = 0 }) {
        ctx.font = `${weight} ${textSize} ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    }

    function drawCountDown(){
        const {time_remaining, REMAINING_DAYS} = updateCountdown();

        ctx.clearRect(0,window.innerHeight - 200, canvas.width, 50);
        /* ctx.fillStyle = 'black'; */
        ctx.fillStyle = '#bbe8eb';
        ctx.fillRect(0, window.innerHeight - 200, canvas.clientWidth, 80);

        drawText({
            text: 'FALTAN',
            textSize: '16px',
            color: 'black',
            weight: 'bolder',
            x: 160,
            y: 455
        });

        drawText({
            text: `${REMAINING_DAYS}`,
            textSize: '35px',
            color: 'black',
            weight: 'bolder',
            x: 150,
            y: 493
        });

        drawText({
            text: 'Dias',
            textSize: '20px',
            color: 'black',
            weight: 'bolder',
            x: 175,
            y: 492
        });

        drawText({
            text: time_remaining,
            textSize: '16px',
            color: 'black',
            weight: 'bolder',
            x: 120,
            y: window.innertHeight - 200
        });
    }

    function drawSoundsSection(){
        icons.forEach((item, idx) => {
            const img = new Image();

            img.src = item?.icon;
            img.onload = () => {
                ctx.drawImage(img, item?.x, item?.y, 60, 60);
                drawText({
                    text: `Cancion ${idx+1}`,
                    textSize: '16px',
                    color: 'black',
                    x: item.x,
                    y: window.innerHeight - 20
                });
            }
        })
    }

    const offsetL = canvas.offsetLeft;
    const offsetT = canvas.offsetTop;
    
    canvas.addEventListener('click', () => {

        const canvasXPoint = event.pageX - offsetL;
        const canvasYPoint = event.pageY - offsetT;

        console.log(canvasXPoint, canvasYPoint);

        icons.forEach(({x,y, sound}) => {
            if(
                (canvasXPoint > x && canvasXPoint < (x + 60)) &&
                (canvasYPoint > y && canvasYPoint < (y + 60))
            ){
                const audio = new Audio();
                audio.src = sound;
                audio.play();
            }
        })
    })


    init();
    /* drawCountDown() */
    setInterval(drawCountDown, 1000);
});