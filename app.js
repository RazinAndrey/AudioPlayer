import { genresData, songsData } from "./data/songs.js";
import Filter from "./audio-filter/audio-filter.js";
import CustomSelect from "./services/custom-select.js";

let genres = genresData;
let songs = songsData;

// поиск
CustomSelect.searchInput.addEventListener('input',
    () => CustomSelect.searchSongs(songs)
);

// показать понравившиеся
Filter.btnLoved.onclick = () => {
    Filter.showLoved(songs);
};

// показать всё
Filter.showResult(songs);

// показать жанры
CustomSelect.showCustomSelect();


const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const openModalButton = document.getElementById('open-form');
const closeModalButton = document.getElementById('close-form');

// Открытие модального окна
 openModalButton.onclick = function() {
    form.style.display = 'flex';
    overlay.style.display = 'block';
};

// Закрытие модального окна по клику на кнопку
closeModalButton.onclick = function() {
    form.style.display = 'none';
    overlay.style.display = 'none';
};

const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');

// превью картинки
imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imagePreview.innerHTML = '<img src="' + event.target.result + '" alt="Preview">';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = '<span>Предпросмотр</span>';
    }
});


const audioInput = document.getElementById('audio-input');
const audioPreview = document.getElementById('audio-preview');

// превью музыки
audioInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        audioPreview.textContent = file.name;
    
    } else {
        audioPreview.innerHTML = '<span>Предпросмотр</span>';
    }
});


const selectElement = document.getElementById('genre-form');

// жанры
genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    option.className = 'option'
    selectElement.appendChild(option);
});


// добаление
document.getElementById('form').addEventListener('submit', function(event) {
    const title = document.getElementById('title-form').value;
    const author = document.getElementById('author-form').value;
    const musicFile = document.getElementById('audio-input').files[0];
    const imageFile = document.getElementById('image-input').files[0];

    event.preventDefault();

    if (musicFile && imageFile) {
        const readerMusic = new FileReader();
        const readerImage = new FileReader();
        let musicObj = {
            title: title,
            author: author,
            audio: '',
            image: ''
        };
        readerMusic.onload = function(e) {
            musicObj.audio = e.target.result;
        };

        readerMusic.readAsDataURL(musicFile);
        
        readerImage.onload = function(e) {
            musicObj.image = e.target.result;
            songs.push(musicObj);
            Filter.showAll(songs);
        };

        readerImage.readAsDataURL(imageFile);

        document.getElementById('form').reset();
        form.style.display = 'none';
        overlay.style.display = 'none';

        imagePreview.innerHTML = '';
        audioPreview.innerHTML= '';
    }
});




import { modal, audioModel, imgPlayOrStop } from "./audio-player/audio-player.js";


// закрываем окно 
// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        audioModel.pause();
        imgPlayOrStop.src = '/assets/images/svg/pause.svg';
    }
}



// Функция для редактирования музыки
// export function editSong(id) {
    // const form = document.getElementById('form');
    // form.style.display = 'flex';
    // overlay.style.display = 'block';
    
    // title.value = musicArray[index].name;
    // document.getElementById('imageUrl').value = musicArray[index].imageUrl;

    // // Удаляем старый обработчик и добавляем новый с указанием индекса
   
    // form.onsubmit = function(event) {
    //     event.preventDefault();
    //     musicArray[index].name = document.getElementById('musicName').value;
    //     musicArray[index].imageUrl = document.getElementById('imageUrl').value;
    //     showAll(songs);
    //     form.reset(); // Сбрасываем форму
    //     form.onsubmit = null; // Удаляем обработчик, чтобы не дублировать
    // };
// }