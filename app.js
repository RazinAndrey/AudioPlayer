import { songsData } from "./data/songs.js";
import Filter from "./services/filter-manager.js";
import SongsManager from "./services/songs-manager.js";
import GenresManager from "./services/genres-manager.js";
import MediaManager from "./services/media-manager.js";

let songs = songsData;

// показать всех изначально
Filter.showAll(songs);
// показать все по клику
Filter.btnAll.onclick = () => Filter.showAll(songs);
// поиск
Filter.searchInput.addEventListener('input',() => Filter.searchSongs(songs));
// показать понравившиеся
Filter.btnLoved.onclick = () => Filter.showLoved(songs);


// показать жанры
GenresManager.showGenres();
// предыдущий показ жанров
GenresManager.prevBtn.onclick = () => GenresManager.prevMethod();
// следующий показ жанров
GenresManager.nextBtn.onclick = () => GenresManager.nextMethod();
// test
GenresManager.colorBtnActGenre();
// открытие модального окна
SongsManager.openModalButton.onclick = () => {
    form.style.display = 'flex';
    overlay.style.display = 'block';
};
// закрытие модального окна по клику на кнопку
SongsManager.closeModalButton.onclick = () => {
    form.style.display = 'none';
    overlay.style.display = 'none';
};
// предпоказ
SongsManager.Preview();


// закрыть плеер
window.onclick = (event) => MediaManager.closeAudioPlayer(event); 
// переключение песни
MediaManager.prevBtnModal.onclick = () => MediaManager.prevModal();
MediaManager.nextBtnModal.onclick = () => MediaManager.nextModal();
// поставить на паузу
MediaManager.btnPlayOrStop.onclick = () => MediaManager.playOrStop();
// прогресс инпута у аудио
MediaManager.audioModel.addEventListener('timeupdate', () => MediaManager.moveProgres());
// прогресс самого аудио
MediaManager.progress.addEventListener('input', () => MediaManager.moveAudo());
// начать сначала
MediaManager.restart.onclick = () => MediaManager.restartAudio();
// громкость
MediaManager.volumeControl.addEventListener('input', () => MediaManager.volume()); 
// переключатель громкости
MediaManager.btnVolume.onclick = () => MediaManager.toggleVolume();

