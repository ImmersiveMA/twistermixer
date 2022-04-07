const sound = document.getElementById("sound");


// Music list:
const calm = new Audio('./audio/Sweet.mp3');
const piano = new Audio('./audio/piano.mp3');

console.log(sound.value);

sound.addEventListener("change", ()=> {

    calm.pause();
    piano.pause();

    switch (sound.value) {
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
