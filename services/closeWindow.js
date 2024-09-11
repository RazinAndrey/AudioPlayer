import { modal, audioModel, imgPlayOrStop } from "../audio-player/audio-player.js";

const form = document.getElementById('audio-form');

const genre = document.getElementById('select-items');

export const closeWindow = (event) => {
    switch(event.target){
        case modal: 
            closeWindowWithBtn();
            break;
        case form: 
            closeWindowAdd();
            break;
        case genre: 
            closeWindowGenre();
            break;
    }
}

const closeWindowWithBtn = () => {
    modal.style.display = "none";
    audioModel.pause();
    imgPlayOrStop.src = '/assets/images/svg/pause.svg';
}

const closeWindowAdd = () => {
    form.style.display = "none";
}

const closeWindowGenre = () => {
    genre.style.display = "none";
}