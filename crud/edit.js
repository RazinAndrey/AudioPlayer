import { songsData } from "../data/songs.js";
import { renderSongs } from "../main.js";

let songs = songsData;

const form = document.getElementById('update');

export const editSong = (id, title) => {
    form.style.display = 'block';

    const formTitle = document.getElementById('form-title');

    formTitle.value = songs[index].title;

    const index = songs.findIndex(song => song.id === id);
  
    console.log("Before update: ", songs[index]);
  
    // const newText = prompt('Введите новый текст:', title);
    songs[index].title = newText;
  
    console.log("After update: ", songs[index ]);
    renderSongs(songs);
  }