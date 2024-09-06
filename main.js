import { songsData } from "./data/songs.js";
import { openModal } from "./detail/detail.js";
import { addLovedSong } from "./loved_list/addLoved.js";

import { deleteSong } from "./crud/delete.js";
import { editSong } from "./crud/edit.js";

import Filter from "./filter.js";

let songs = songsData;

export const renderSongs = (songs) => {
  const songsList = document.getElementById("songs-list");
  songsList.innerHTML = ''; // Очищаем список перед отрисовкой
  songs.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.className = 'item-song';
    songsList.appendChild(songItem);

    // просмотр одной песни
    songItem.onclick = () => openModal(index);

    const songImg = document.createElement('img');
    songImg.className = 'img-song';
    songImg.src = song.image;
    songItem.appendChild(songImg);

    const songTitleAndAuthor = document.createElement('div');
    songTitleAndAuthor.className = 'title-and-author-song';
    songItem.appendChild(songTitleAndAuthor);

    const songTitle = document.createElement('div');
    songTitle.className = 'title-song';
    songTitle.textContent = song.title;
    songTitleAndAuthor.appendChild(songTitle);

    const songAuthor = document.createElement('div');
    songAuthor.className = 'author-song';
    songAuthor.textContent = song.author;
    songTitleAndAuthor.appendChild(songAuthor);

    const btns = document.createElement('div');
    btns.className = 'btns';
    songsList.appendChild(btns);

    const buttonHeart = document.createElement('button');
    buttonHeart.className = 'btn-heart';
    btns.appendChild(buttonHeart);

    const imgHeart = document.createElement('img');
    if(song.loved){
      imgHeart.src = '/assets/images/svg/heart_2.svg';
    }else{
      imgHeart.src = '/assets/images/svg/heart.svg';
    }
    imgHeart.id = 'img-heart';
    imgHeart.className = 'img-heart';
    buttonHeart.appendChild(imgHeart);

    buttonHeart.onclick = () => addLovedSong(index);

    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn-edit';
    btns.appendChild(buttonEdit);

    const imgEdit = document.createElement('img');
    imgEdit.src = '/assets/images/svg/edit.svg';
    imgEdit.className = 'img-edit';
    buttonEdit.appendChild(imgEdit);

    buttonEdit.onclick = () => editSong(song.id, song.title);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn-delete';
    btns.appendChild(buttonDelete);

    const imgDelete = document.createElement('img');
    imgDelete.src = '/assets/images/svg/delete.svg';
    imgDelete.className = 'img-delete';
    buttonDelete.appendChild(imgDelete);

    buttonDelete.onclick = () => deleteSong(song.id);

    // показать все изначально
    Filter.showLength(songs);
  });

}
renderSongs(songs);



const btnAdd = document.getElementById('btn-add-song');
btnAdd.addEventListener('click', () => addSong());

const addSong = () => {
  const songInput = document.getElementById('new-song');
  const newSong = songInput.value;
  if (newSong !== '') {
    songs.push({ id: Math.random(), title: newSong });
    renderSongs(songs);
    songInput.value = '';
  }
}

// поиск
Filter.searchInput.addEventListener('input', () => Filter.searchSongs(songs));

// показать понравившиеся
Filter.btnLoved.onclick = () => Filter.showLoved(songs);

// показать все по клику
Filter.btnAll.onclick = () => Filter.showAll(songs);



