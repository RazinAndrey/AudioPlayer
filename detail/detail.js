import { songsData } from "/data/songs.js";

const tracks = songsData;

const modal = document.getElementById('modal');

modal.style.display = "none";

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
    }
}

let currentIndex = 0;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

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
btnPlayOrStop.textContent = 'Stop';

btnPlayOrStop.onclick = ()=> playOrStop(audioModel, btnPlayOrStop);

const playOrStop = (audio, playPauseBtn) => {
    if (audio.paused) {
        console.log(1);
      audio.play();
      playPauseBtn.textContent = 'Pause';
    } else {
        console.log(12);
      audio.pause();
      playPauseBtn.textContent = 'Play';
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


const random = document.getElementById('btn-random');
random.onclick = () =>  {
    const randomItem = Math.floor(Math.random() * tracks.length)
    load(randomItem);
    audioModel.play();
};








