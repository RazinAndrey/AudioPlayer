import { genresData, songsData } from "./data/songs.js";
import Filter from "./services/filter-manager.js";
import SongsManager from "./services/songs-manager.js";
import GenresManager from "./services/genres-manager.js";
import MediaManager from "./services/media-manager.js";
import { renderGenres } from "./scripts/components/render-genres.js";


let songs = songsData;
let genres = genresData;

// показать всех изначально
Filter.showAll(songs);
// показать все по клику
Filter.btnAll.onclick = () => Filter.showAll(songs);
// поиск
Filter.searchInput.addEventListener('input', () => Filter.searchSongs(songs));
// показать понравившиеся
Filter.btnLoved.onclick = () => Filter.showLoved(songs);


// показать жанры
GenresManager.showGenres();
// предыдущий показ жанров
GenresManager.prevBtn.onclick = () => GenresManager.prevMethod();
// следующий показ жанров
GenresManager.nextBtn.onclick = () => GenresManager.nextMethod();

const sc = new SongsManager(songs, genres); 

// открытие модального окна
sc.openFormAdd.onclick = (event) => {
    handleClick(event);
    SongsManager.form.reset();
    SongsManager.btnEdit.style.display = 'none';
    SongsManager.btnAdd.style.display = 'block';
    SongsManager.form.style.display = 'flex';
    SongsManager.overlay.style.display = 'block';
};


// закрытие модального окна по клику на кнопку
SongsManager.closeForm.onclick = (event) => {
    handleClick(event);
    SongsManager.form.reset();
    SongsManager.imagePreview.innerHTML = '<span>Предпросмотр</span>';
    SongsManager.audioPreview.innerHTML = '<span>Название музыки</span>';
    SongsManager.form.style.display = 'none';
    SongsManager.overlay.style.display = 'none';
};
// предпоказ
SongsManager.Preview();
// показать ;анры 
renderGenres(genres);

SongsManager.form.addEventListener('submit', (event) => {
    event.preventDefault();
    SongsManager.addSong();
})


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