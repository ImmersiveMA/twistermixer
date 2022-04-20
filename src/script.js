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

color1.addEventListener('input', () => {
    

    if(color1.value > 0 && color1.value < 255) {
        red = 255 - color1.value;
        green = color1.value;
        blue = 0;
    }
    
    if(color1.value > 255 && color1.value < 510) {
        green = 255 - (color1.value-255)
        blue = color1.value - 255;
        red = 0;
    }
    
    if(color1.value > 510 && color1.value < 765) {
        blue = 255 - (color1.value - 510);
        red = color1.value - 510;
        green = 0;
    }
    console.log("green: ", green);
    console.log("red: ", red);
    console.log('blue: ', blue);
})