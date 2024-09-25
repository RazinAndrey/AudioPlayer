import { songsData } from "../../../data/songs-data.js";
import Filter from "../filter/filter.js";

let songs = songsData;

export const addSong = () => {
    const formEdit = document.getElementById('form-add');
    const formEditContent = document.getElementById('form-add-content');
    formEdit.style.display = 'block';

    const title = document.getElementById('title-form-add');
    const author = document.getElementById('author-form-add');
    const selectElement = document.getElementById('genre-form-add');
    const imageInput = document.getElementById('image-input-add');
    const audioInput = document.getElementById('audio-input-add');

    const newTitle = title.value;
    const newAuthor = author.value;
    const newMusicFile = audioInput.files[0];
    const newImageFile = imageInput.files[0];
    const newGenre = selectElement.value;

    const btnAdd = document.getElementById('btn-add');

    if (newMusicFile && newImageFile) {

        btnAdd.disabled = false;

        const readerMusic = new FileReader();
        const readerImage = new FileReader();

        let musicObj = {
            id: new Date(),
            title: newTitle,
            author: newAuthor,
            genre: newGenre,
            audio: '',
            image: ''
        };

        readerMusic.onload = function (e) {
            musicObj.audio = e.target.result;
        };

        readerMusic.readAsDataURL(newMusicFile);

        readerImage.onload = function (e) {
            musicObj.image = e.target.result;
            songs.unshift(musicObj);
            console.log(musicObj);
            Filter.showResult(songs);
        };

        readerImage.readAsDataURL(newImageFile);

        formEditContent.reset();

        closeAddForm();
    } else {
        btnAdd.disabled = true;
        console.log(111);
    }
}

export const closeAddForm = () => {
    const formEdit = document.getElementById('form-add');
    const formEditContent = document.getElementById('form-add-content');
    formEditContent.reset();
    formEdit.style.display = 'none';

    const imagePreview = document.getElementById('image-preview-add');
    const audioPreview = document.getElementById('audio-preview-add');

    imagePreview.innerHTML = '<span>Предпросмотр</span>';
    audioPreview.innerHTML = '<span>Название музыки</span>';
}