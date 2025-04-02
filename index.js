"use strict";

const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");
const gameoverSound = document.getElementById("gameoverSound");


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "") || "0";
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
        playSoundOnMovement();
    }
    else {
        playGameOverSound();
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "") || "0";
    const left = parseInt(leftNumbers, 10);

    if (left < 360) { 
        dodger.style.left = `${left + 1}px`;
        playSoundOnMovement();
    }
    else {
        playGameOverSound();
    }
}

function moveDodgerUp() { 
    const bottomNumbers = dodger.style.bottom.replace("px", "") || "0";
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 380) {  // Juster denne værdi efter containerens højde
        dodger.style.bottom = `${bottom + 1}px`; 
        playSoundOnMovement();
    }
    else {
        playGameOverSound();
    }
}

function moveDodgerDown() { 
    const bottomNumbers = dodger.style.bottom.replace("px", "") || "0";
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`; 
        playSoundOnMovement();
    }
    else {
        playGameOverSound();
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }

    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }

    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
});

function playSoundOnMovement () {
    movementSound.currentTime = 0;
    movementSound.play();
}

function playGameOverSound () {

    movementSound.currentTime = 0;
    gameoverSound.play();

}