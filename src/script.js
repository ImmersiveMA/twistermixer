const sound = document.getElementById("sound");
const tempLights = document.getElementById("tempLights");
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');


// Sound list:
const calm = new Audio('./audio/Sweet.mp3');
const piano = new Audio('./audio/piano.mp3');
const nature = new Audio('./audio/nature.mp3');

sound.addEventListener("input", ()=> {

    nature.pause();
    calm.pause();
    piano.pause();

    switch (sound.value) {
        case "1":
            nature.play();
            break;
        
        case "2":
            calm.play();
            console.log("liedje calm")
            break;
    
        case "3":
            piano.play();
            break;
        
        default:

            console.log("it brokey");
            break;
    }
});

tempLights.addEventListener("input", () => {
    switch (tempLights.value) {
        case "1":
            request('http://192.168.137.92/lampje?color=green');
            break;
        
        case "2":
            request('http://192.168.137.92/lampje?color=white');
            break;
    
        case "3":
            request('http://192.168.137.92/lampje?color=yellow');
            break;
        
        default:

            console.log("lights it brokey");
            break;
    }
});

function request(url) {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.send();
}



let delay = 100;
let cantSend = true;
let cantSend2 = true;

color2.addEventListener('input', () => {
    
    color = getColor(color2.value);
    showcase.style.backgroundColor = `rgb( ${color.red}, ${color.green}, ${color.blue})`;

    if(!cantSend2) return;
    cantSend2 = false;

    request(`http://192.168.137.15/color?r=${color.red}&g=${color.green}&b=${color.blue}`);

    setTimeout(() => {
        cantSend2 = true;
    }, delay);
})

color1.addEventListener('input', () => {
    
    color = getColor(color1.value);


    if(!cantSend) return;
    cantSend = false;
    request(`http://192.168.137.168/color?r=${color.red}&g=${color.green}&b=${color.blue}`);
    request(`http://192.168.137.190/color?r=${color.red}&g=${color.green}&b=${color.blue}`);
    request(`http://192.168.137.37/color?r=${color.red}&g=${color.green}&b=${color.blue}`);

    console.log(color1.value, `r=${color.red},g=${color.green},b=${color.blue}`)

    setTimeout(() => {
        cantSend = true;
    }, delay);

});

function getColor (color) {
    let green;
    let blue;
    let red;
    
    
    if(color < 15) {
        blue = 0;
        green = 0;
        red = 255;
    }
    
    //rood -> geel
    if(color > 15 && color < 127) {
        blue = 0;
        red = 255;
        green = 2*color;
    }
    
    //geel -> groen
    if(color > 127 && color < 255) {
        blue = 0;
        green = 255;
        red = 255 - (2*(color - 127));
    }

    //groen -> cyaan
    if(color >255 && color < 382) {
        red = 0
        green = 255;
        blue = 2* (color - 255);
    }

    //cyaan -> blauw
    if(color > 382 && color < 510) {
        red = 0;
        blue = 255;
        green = 255 - (2*(color - 382))
    }
    
    //blauw -> paars
    if(color > 510 && color < 637) {
        green = 0;
        blue = 255;
        red = 2* (color - 510);
    }

    if(color > 637 && color < 750) {
        green = 0;
        red = 255;
        blue = 255 - (2*(color - 638));
    }

    if(color > 750) {
        green = 0;
        blue = 0;
        red = 255;
    }

    colorobj = {};
    colorobj.red = red;
    colorobj.green = green;
    colorobj.blue = blue;
    return colorobj;
}