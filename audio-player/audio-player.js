import { songsData } from "/data/songs.js";
import { closeWindow } from "../services/closeWindow.js";

const tracks = songsData;

export const modal = document.getElementById('audio-player');

const titleModel = document.getElementById('title-modal');
const authorModel = document.getElementById('author-modal');
const imgModel = document.getElementById('img-modal');
export const audioModel = document.getElementById('audio-modal');

// открываем окно
export const audioPlayer = (index) => {
    modal.style.display = "block";
    titleModel.textContent = tracks[index].title;
    authorModel.textContent = tracks[index].author;
    imgModel.src = tracks[index].image;
    audioModel.src = tracks[index].audio;

    audioModel.play();

    random.onclick = () => showRandom(index);

    colorVolume();
}

// закрываем окно 
window.onclick = (event) => closeWindow(event);



let currentIndex = 0;

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

prev.onclick = () => {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    openAudioPlayer(currentIndex);
}

next.onclick = () => {
    currentIndex = (currentIndex + 1) % tracks.length;
    openModal(currentIndex);
}

 const btnPlayOrStop = document.getElementById('btn-play-or-stop');
 export const imgPlayOrStop = document.getElementById('img-play-or-stop');

btnPlayOrStop.onclick = () => playOrStop(audioModel, imgPlayOrStop);

const playOrStop = (audio, img) => {
    if (audio.paused) {
        audio.play();
        img.src = '/assets/images/svg/pause.svg';
    } else {
        audio.pause();
        img.src = '/assets/images/svg/play.svg';
    }
}

const progress = document.getElementById('progress');

// заставляем input двигаться с audio
audioModel.addEventListener('timeupdate', () => {
    progress.value = audioModel.currentTime;
    progress.max = audioModel.duration;
    showTime(progress.value);
    colorProgress();
});

// заставляем audio двигаться с input
progress.addEventListener('input', () => {
    audioModel.currentTime = progress.value;
    audioModel.play();
    colorProgress();
});

// красим 
const colorProgress = () => {
    const progressColor = (progress.value / progress.max) * 100;
    progress.style.background = `linear-gradient(to right, var(--violet-color) ${progressColor}%, #ccc ${progressColor}%`;
    const number = Math.floor(progressColor);
}

// время
const time = document.getElementById('time');
const showTime = (seconds) => {
    const minutes = Math.floor(audioModel.currentTime / 60);
    seconds = Math.floor(audioModel.currentTime % 60);
    time.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// начать заново
const restart = document.getElementById('btn-restart');
restart.onclick = () => restartAudio();
const restartAudio = () => {
    audioModel.currentTime = 0;
    progress.value = 0;
}


// рандом
const random = document.getElementById('btn-random');

function showRandom(index) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * tracks.length);
    } while (randomIndex === index);

    const song = randomIndex;

    openModal(song);
}


// громкость
const volumeControl = document.getElementById('volume');

audioModel.volume = volumeControl.value;

volumeControl.addEventListener('input', () => {
    audioModel.volume = volumeControl.value;
    imgVolume.src = '/assets/images/svg/on_volume.svg';
    colorVolume();
});

const colorVolume = () => {
    const progressColor = (volumeControl.value / volumeControl.max) * 100;
    volumeControl.style.background = `linear-gradient(to right, #f50 ${progressColor}%, #ccc ${progressColor}%)`;
    if (progressColor === 0) {
        imgVolume.src = '/assets/images/svg/off_volume.svg';
    }
}

const btnVolume = document.getElementById('volume-dtn');
const imgVolume = document.getElementById('volume-img');

btnVolume.onclick = () => {
    if (audioModel.volume) {
        imgVolume.src = '/assets/images/svg/off_volume.svg';
        audioModel.volume = 0;
        volumeControl.value = 0;
        colorVolume();
    }
    else {
        imgVolume.src = '/assets/images/svg/on_volume.svg';
        audioModel.volume = 1;
        volumeControl.value = 1;
        colorVolume();
    }
};