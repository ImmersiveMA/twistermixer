const sound = document.getElementById("sound");
const tempLights = document.getElementById("tempLights");
const color1 = document.getElementById('color1');

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

let green;
let blue;
let red;

const showcase = document.getElementById('showcase');

color1.addEventListener('input', () => {
    
    //rood -> geel
    if(color1.value > 0 && color1.value < 127) {
        blue = 0;
        red = 255;
        green = 2*color1.value;
    }
    
    //geel -> groen
    if(color1.value > 127 && color1.value < 255) {
        blue = 0;
        green = 255;
        red = 255 - (2*(color1.value - 127));
    }

    //groen -> cyaan
    if(color1.value >255 && color1.value < 382) {
        red = 0
        green = 255;
        blue = 2* (color1.value - 255);
    }

    //cyaan -> blauw
    if(color1.value > 382 && color1.value < 510) {
        red = 0;
        blue = 255;
        green = 255 - (2*(color1.value - 382))
    }
    
    //blauw -> paars
    if(color1.value > 510 && color1.value < 637) {
        green = 0;
        blue = 255;
        red = 2* (color1.value - 510);
    }

    if(color1.value > 637 && color1.value < 765) {
        green = 0;
        red = 255;
        blue = 255 - (2*(color1.value - 637));
    }

    showcase.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`;

    console.log(color1.value);
    console.log("green: ", green);
    console.log("red: ", red);
    console.log('blue: ', blue);
})