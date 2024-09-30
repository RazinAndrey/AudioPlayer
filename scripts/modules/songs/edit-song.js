import { songsData } from "../../../data/songs-data.js";
import { activeBtn } from "../filter/active.js";

import Filter from "../filter/filter.js";



export const editSong = (songs, songId) => {

    const formEdit = document.getElementById('form-edit');
    const formEditContent = document.getElementById('form-edit-content');
    formEdit.style.display = 'block';

    const indexSong = songs.findIndex(songs => songs.id === songId);

    const title = document.getElementById('title-form-edit');
    const author = document.getElementById('author-form-edit');
    const selectElement = document.getElementById('genre-form-edit');
    const imageInput = document.getElementById('image-input-edit');
    const audioInput = document.getElementById('audio-input-edit');

    const imagePreview = document.getElementById('image-preview-edit');
    const audioPreview = document.getElementById('audio-preview-edit');
    imagePreview.innerHTML = '<img src="' + songs[indexSong].image + '" alt="Preview">';
    let strSongs = songs[indexSong].audio;
    let newStrSongs = strSongs.substring(14, 40);
    audioPreview.innerHTML = newStrSongs;

    title.value = songs[indexSong].title;
    author.value = songs[indexSong].author;
    selectElement.value = songs[indexSong].genre;

    fetch(songs[indexSong].image)
        .then(response => response.blob())
        .then(blob => {
            // cоздаем объект File из blob
            const file = new File([blob], `image${songs[indexSong].id}`, { type: blob.type });

            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            imageInput.files = dataTransfer.files; // назначаем файлы в input
        })
        .catch(error => {
            console.error("Ошибка загрузки изображения:", error);
        });

    fetch(songs[indexSong].audio)
        .then(response => response.blob())
        .then(blob => {
            // cоздаем объект File из blob
            const file = new File([blob], `audio${songs[indexSong].id}`, { type: blob.type });

            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            audioInput.files = dataTransfer.files; // назначаем файлы в input
        })
        .catch(error => {
            console.error("Ошибка загрузки изображения:", error);
        });


    const inputs = formEditContent.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('input', checkForm);
    });
    
    const btnEdit = document.getElementById('btn-edit');

    btnEdit.onclick = () => {
        songs[indexSong] = {
            title: title.value,
            author: author.value,
            genre: selectElement.value,
            loved: songs[indexSong].loved ? true : false,
            image: imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : songs[indexSong].image,
            audio: audioInput.files[0] ? URL.createObjectURL(audioInput.files[0]) : songs[indexSong].audio
        };

        formEdit.style.display = 'none';

        Filter.showResult(songs);

        formEditContent.reset();

        const btnAll = document.getElementById('btn-all');
        activeBtn(btnAll);
    }
}


function checkForm() {

    const formEditContent = document.getElementById('form-edit-content');
    const inputs = formEditContent.querySelectorAll('input');
    const btnEdit = document.getElementById('btn-edit');

    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    btnEdit.disabled = !allFilled;
    btnEdit.classList.toggle('enabled', allFilled);
}


export const closeEditForm = () => {
    const formEdit = document.getElementById('form-edit');
    const formEditContent = document.getElementById('form-edit-content');

    formEditContent.reset();
    formEdit.style.display = 'none';
}

