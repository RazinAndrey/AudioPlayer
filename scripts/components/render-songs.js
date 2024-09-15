import Filter from "../../services/filter-manager.js";
import MediaManager from "../../services/media-manager.js";


export const renderSongs = (songs) => {

  const songsList = document.getElementById("songs-list");
  songsList.innerHTML = '';

  songs.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.id = 'item-song';
    songItem.className = 'item-song';
    songsList.appendChild(songItem);

    // просмотр одной песни
    songItem.onclick = () => MediaManager.showAudioPlayer(index);

    const songImg = document.createElement('img');
    songImg.className = 'img-song';
    songImg.src = song.image;
    songItem.appendChild(songImg);

    const songTitleAndAuthor = document.createElement('div');
    songTitleAndAuthor.className = 'block-text-song';
    songItem.appendChild(songTitleAndAuthor);

    const songTitle = document.createElement('div');
    songTitle.className = 'title-song';
    songTitle.textContent = song.title;
    songTitleAndAuthor.appendChild(songTitle);

    const songAuthor = document.createElement('div');
    songAuthor.className = 'author-song';
    songAuthor.textContent = song.author;
    songTitleAndAuthor.appendChild(songAuthor);

    const songGenre = document.createElement('div');
    songGenre.className = 'genre-song';
    songGenre.textContent = song.genre;
    songTitleAndAuthor.appendChild(songGenre);

    const btns = document.createElement('div');
    btns.className = 'btns';
    songsList.appendChild(btns);

    const buttonHeart = document.createElement('button');
    buttonHeart.className = 'btn-heart';
    btns.appendChild(buttonHeart);

    const imgHeart = document.createElement('img');
    if (song.loved) {
      imgHeart.src = '/assets/images/svg/heart_2.svg';
    } else {
      imgHeart.src = '/assets/images/svg/heart.svg';
    }
    imgHeart.id = 'img-heart';
    imgHeart.className = 'img-heart';
    buttonHeart.appendChild(imgHeart);

    // добавить в избранные
    buttonHeart.onclick = () => Filter.changeLovedSong(song.id);

    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn-edit';
    btns.appendChild(buttonEdit);

    const imgEdit = document.createElement('img');
    imgEdit.src = '/assets/images/svg/edit.svg';
    imgEdit.className = 'img-edit';
    buttonEdit.appendChild(imgEdit);

    // buttonEdit.onclick = () => editSong(index);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn-delete';
    btns.appendChild(buttonDelete);

    const imgDelete = document.createElement('img');
    imgDelete.src = '/assets/images/svg/delete.svg';
    imgDelete.className = 'img-delete';
    buttonDelete.appendChild(imgDelete);

    buttonDelete.onclick = () => Filter.deleteSong(song.id);
  });

}