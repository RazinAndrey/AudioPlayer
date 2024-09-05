import { songsData } from "./data/songs.js";
import { openModal } from "./detail/detail.js";

let songs = songsData;

const renderSongs = (songs) => {
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

    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'Edit';
    buttonEdit.className = 'btn-edit';
    btns.appendChild(buttonEdit);

    buttonEdit.onclick = () => editSong(song.id, song.title);


    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';
    buttonDelete.className = 'btn-delete';
    btns.appendChild(buttonDelete);

    buttonDelete.onclick = () => deleteSong(song.id);
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

const deleteSong = (id) => {
  songs = songs.filter(song => song.id !== id);
  console.log(songs);
  renderSongs(songs);
}

const editSong = (id, title) => {
  const song = songs.findIndex(song => song.id === id);

  console.log("Before update: ", songs[song]);

  const newText = prompt('Введите новый текст:', title);
  songs[song].title = newText;

  console.log("After update: ", songs[song]);
  renderSongs(songs);
}



const searchInput = document.getElementById('search-input');

const searchSongs = () => {
  const search = searchInput.value.toLowerCase();
  const filteredItems = songs.filter(item => item.title.toLowerCase().includes(search));
  renderSongs(filteredItems);
}

searchInput.addEventListener('input', () => searchSongs());

