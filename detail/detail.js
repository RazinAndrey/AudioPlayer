import { songsData } from "/data/songs.js";

const tracks = songsData;

const modal = document.getElementById('modal');

const titleModel = document.getElementById('title-modal');
const authorModel = document.getElementById('author-modal');
const imgModel = document.getElementById('img-modal');
const audioModel = document.getElementById('audio-modal');

// открываем окно
export const openModal = (item) => {
    modal.style.display = "block";
    titleModel.textContent = item.title;
    authorModel.textContent = item.author;
    imgModel.src = item.image;
    audioModel.src = item.audio;
    audioModel.play();
}

// закрываем окно
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        audioModel.pause();
        imgPlayOrStop.src = '/assets/images/svg/pause.svg';
    }
}

let currentIndex = 0;

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

const load = (index) => {
    titleModel.textContent = tracks[index].title;
    authorModel.textContent = tracks[index].author;
    imgModel.src = tracks[index].image;
    audioModel.src = tracks[index].audio;
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    load(currentIndex);
    audioModel.play();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % tracks.length;
    load(currentIndex);
    audioModel.play();
});

const btnPlayOrStop = document.getElementById('btn-play-or-stop');
const imgPlayOrStop = document.getElementById('img-play-or-stop');

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

// заставляем audio двигаться с input
progress.addEventListener('input', () => {
    audioModel.currentTime = (progress.value * audioModel.duration) / 100;
    // console.log(audioModel.currentTime);
});

// заставляем input двигаться с audio
audioModel.addEventListener('timeupdate', () => {
    progress.value = (audioModel.currentTime / audioModel.duration) * 100;
    showTime(progress.value);

    
    
    // красим 
    const progressColor = (progress.value / progress.max) * 100;
    progress.style.background = `linear-gradient(to right, var(--violet-color) ${progressColor}%, #ccc ${progressColor}%)`;
   // console.log(progressColor);
});

const time = document.getElementById('time');

const showTime = (seconds) => {
    const minutes = Math.floor(audioModel.currentTime / 60);
    seconds = Math.floor(audioModel.currentTime % 60);
    time.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

const restart = document.getElementById('btn-restart');
restart.onclick = () => audioModel.currentTime = 0;


// рандом
const random = document.getElementById('btn-random');
random.onclick = () => showRandom(currentIndex);

const showRandom = () => playRandomSong();

let previousSong = null;

function playRandomSong() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * tracks.length);
    } while (tracks[randomIndex] === previousSong);

    previousSong = tracks[randomIndex];

    console.log(randomIndex);

    load(randomIndex);
    audioModel.play();
}


// громкость
const volumeControl = document.getElementById('volume');

audioModel.volume = volumeControl.value;

volumeControl.addEventListener('input', () => {
    audioModel.volume = volumeControl.value;
});


const btnVolume = document.getElementById('volume-dtn');
const imgVolume = document.getElementById('volume-img');

btnVolume.onclick = () => {
    if (audioModel.volume) {
        imgVolume.src = '/assets/images/svg/off_volume.svg';
        audioModel.volume = 0;
        volumeControl.value = 0;
    } else {
        imgVolume.src = '/assets/images/svg/on_volume.svg';
        audioModel.volume = 1;
        volumeControl.value = 1;
    }
};