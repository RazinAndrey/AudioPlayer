import { songsData } from "/data/songs.js";

const tracks = songsData;

const modal = document.getElementById('modal');

const titleModel = document.getElementById('title-modal');
const authorModel = document.getElementById('author-modal');
const imgModel = document.getElementById('img-modal');
const audioModel = document.getElementById('audio-modal');



export const openModal = (item) => {
    modal.style.display = "block";
    titleModel.textContent = item.title;
    authorModel.textContent = item.author;
    imgModel.src = item.image;
    audioModel.src = item.audio;
    audioModel.play();
}


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
        console.log(1);
        audio.play();
        img.src = '/assets/images/svg/pause.svg';
    } else {
        console.log(12);
        audio.pause();
        img.src = '/assets/images/svg/play.svg';
    }
}

const progress = document.getElementById('progress');

// заставляем audio двигаться с input
progress.addEventListener('input', () => {
    audioModel.currentTime = (progress.value * audioModel.duration) / 100;
    console.log(audioModel.currentTime);
});

// заставляем input двигаться с audio
audioModel.addEventListener('timeupdate', () => {
    progress.value = (audioModel.currentTime / audioModel.duration) * 100;
    showTime(progress.value);
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



