function unicornFart() {
    var audio = new Audio("assets/sounds/magic_farts.mp3");
    audio.play();
    document.getElementById('farting-unicorn').className ='farting-unicorn-animation';



    // document.getElementsByClassName('farting-unicorn').addClass('farting-unicorn-animation');

}

function resetUnicornFart() {
    document.getElementById('farting-unicorn').className ='farting-unicorn';

}

function lightWeight() {
    var audio = new Audio('assets/sounds/Ronnie Coleman yeah buddy light weight baby.mp3');
    audio.play();
}

function unicornLaugh() {
    var audio = new Audio('assets/sounds/hahaha-Peter_De_Lang-1639076107.mp3');
    audio.play();
}

function sparkle() {
    var audio = new Audio('assets/sounds/Sparkle-Sound-Effect.mp3');
    audio.play();
}