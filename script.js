var numberOfPianoButtons = document.querySelectorAll(".piano-keys li").length;
for (var i=0; i<numberOfPianoButtons; i++) {
    document.querySelectorAll(".piano-keys li")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.textContent;
        makeSound(buttonInnerHTML);
});
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
})
function makeSound(key){
    switch (key) {
        case ";":
            var key1 = new Audio('sounds/;.wav');
            key1.play();
            break;
        case "a":
            var key2 = new Audio('sounds/a.wav');
            key2.play();
            break;
        case "d":
            var key3 = new Audio('sounds/d.wav');
            key3.play();
            break;
        case "e":
            var key4 = new Audio('sounds/e.wav');
            key4.play();
            break;
        case "f":   
            var key5 = new Audio('sounds/f.wav');
            key5.play();
            break;
        case "g":
            var key6 = new Audio('sounds/g.wav');
            key6.play();
            break;
        case "h":
            var key6= new Audio('sounds/h.wav');
            key6.play();
            break;
        case "j":
            var key8= new Audio('sounds/j.wav');
            key8.play();
            break;
        case "k":
            var key9 = new Audio('sounds/k.wav');
            key9.play();
            break;
        case "l":
            var key10 = new Audio('sounds/l.wav');
            key10.play();
            break;
        case "o":
            var key11 = new Audio('sounds/o.wav');
            key11.play();
            break;
        case "p":
            var key12 = new Audio('sounds/p.wav');
            key12.play();
            break;
        case "s":
            var key13 = new Audio('sounds/s.wav');
            key13.play();
            break;
        case "t":
            var key14 = new Audio('sounds/t.wav');
            key14.play();
            break;
       case "u":
            var key15 = new Audio('sounds/u.wav');
            key15.play();
            break;
        case "w":
            var key16 = new Audio('sounds/w.wav');
            key16.play();
            break;
        case "y":
            var key17 = new Audio('sounds/y.wav');
            key17.play();
            break;
                                                                                                                           
        default: console.log(buttonInnerHTML)
    }

}

keysCheckbox = document.getElementById('hideCheckbox');
pianoKeys = document.querySelectorAll('.piano-keys li span');
volumeSlider = document.querySelector(".volume input");


const showKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

keysCheckbox.addEventListener("click", showKeys)

