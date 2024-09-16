import { songsData } from "/data/songs.js";

let songs = songsData;

class MediaManager {

    static media = document.getElementById('audio-player');
    static titleModel = document.getElementById('title-modal');
    static authorModel = document.getElementById('author-modal');
    static imgModel = document.getElementById('img-modal');
    static audioModel = document.getElementById('audio-modal');

    // показ плеера
    static showAudioPlayer = (index) => {
        this.media.style.display = "block";
        this.titleModel.textContent = songs[index].title;
        this.authorModel.textContent = songs[index].author;
        this.imgModel.src = songs[index].image;
        this.audioModel.src = songs[index].audio;
        this.audioModel.play();
        this.random.onclick = () => this.showRandom(index);
        this.colorVolume();
    }


    /* закрытие аудиоплеера */
    static closeAudioPlayer(event) {
        if (event.target === this.media) {
            this.media.style.display = "none";
            this.audioModel.pause();
            this.imgPlayOrStop.src = '/assets/images/svg/pause.svg';
        }
    }


    /* переключение музыки */
    static currentIndex = 0;
    static prevBtnModal = document.getElementById('btn-prev-modal');
    static nextBtnModal = document.getElementById('btn-next-modal');
    // переключение вперед 
    static prevModal() {
        this.currentIndex = (this.currentIndex - 1 + songs.length) % songs.length;
        this.showAudioPlayer(this.currentIndex);
    }
    // переключение назад 
    static nextModal() {
        this.currentIndex = (this.currentIndex + 1) % songs.length;
        this.showAudioPlayer(this.currentIndex);
    }


    /* stop | go */
    static btnPlayOrStop = document.getElementById('btn-play-or-stop');
    static imgPlayOrStop = document.getElementById('img-play-or-stop');
    static playOrStop = () => {
        if (this.audioModel.paused) {
            this.audioModel.play();
            this.imgPlayOrStop.src = '/assets/images/svg/pause.svg';
        } else {
            this.audioModel.pause();
            this.imgPlayOrStop.src = '/assets/images/svg/play.svg';
        }
    }


    /* прогресс аудио */
    static progress = document.getElementById('progress');
    // заставляем input двигаться с audio
    static moveProgres() {
        this.progress.value = Math.floor(this.audioModel.currentTime);
        this.progress.max = Math.floor(this.audioModel.duration);
        this.showTime(this.progress.value);
        this.colorProgress();
    };
    // заставляем audio двигаться с input
    static moveAudo() {
        this.audioModel.currentTime = this.progress.value;
        this.audioModel.play();
    };
    // красим прогресс
    static colorProgress() {
        const progressColor = (this.progress.value / this.progress.max) * 100;
        this.progress.style.background = `linear-gradient(to right, var(--violet-color) ${progressColor}%, #ccc ${progressColor}%`;
    }


    /* время */
    static time = document.getElementById('time');
    static showTime = (seconds) => {
        const minutes = Math.floor(this.audioModel.currentTime / 60);
        seconds = Math.floor(this.audioModel.currentTime % 60);
        this.time.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }


    // начать сначала
    static restart = document.getElementById('btn-restart');
    static restartAudio = () => {
        this.audioModel.play();
        this.audioModel.currentTime = 0;
        this.progress.value = 0;
    }


    /* рандом */
    static random = document.getElementById('btn-random');
    static showRandom(index) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === index);

        const song = randomIndex;

        this.showAudioPlayer(song);
    }


    /* громкость */
    static volumeControl = document.getElementById('volume');
    static volume() {
        this.audioModel.volume = this.volumeControl.value;
        this.imgVolume.src = '/assets/images/svg/on_volume.svg';
        this.colorVolume();
    };
    // цвет громкости
    static colorVolume = () => {
        const progressColor = (this.volumeControl.value / this.volumeControl.max) * 100;
        this.volumeControl.style.background = `linear-gradient(to right, var(--violet-color) ${progressColor}%, #ccc ${progressColor}%)`;
        if (progressColor === 0) {
            this.imgVolume.src = '/assets/images/svg/off_volume.svg';
        }
    }
    // переключатель громкости
    static btnVolume = document.getElementById('volume-dtn');
    static imgVolume = document.getElementById('volume-img');
    static toggleVolume() {
        if (this.audioModel.volume) {
            this.imgVolume.src = '/assets/images/svg/off_volume.svg';
            this.audioModel.volume = 0;
            this.volumeControl.value = 0;
            this.colorVolume();
        }
        else {
            this.imgVolume.src = '/assets/images/svg/on_volume.svg';
            this.audioModel.volume = 1;
            this.volumeControl.value = 1;
            this.colorVolume();
        }
    };
}

export default MediaManager;