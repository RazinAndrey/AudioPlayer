import { modal, audioModel, imgPlayOrStop } from "../audio-player/audio-player.js";

const form = document.getElementById('audio-form');

export const closeWindow = (event) => {
    switch(event.target){
        case modal: 
            closeWindowWithBtn();
            break;
        case form: 
            closeWindowAdd();
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
