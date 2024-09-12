import { renderSongs } from "../audio-list/audio-list.js";

import { songsData } from "../data/songs.js";

let songs = songsData;

class AudioManager {

  // добавление
  static addSong = () => {
    const songInput = document.getElementById('new-song');
    const newSong = songInput.value;
      if (newSong !== '') {
        songs.push({
          id: Math.random(), title: newSong, author: 'AAAA', image: 'none', audio: 'none' 
        });
        renderSongs(songs);
        songInput.value = '';
      }
  }

  // редактирование
  static editSong = (id, title) => {
      form.style.display = 'block';
    
      const formTitle = document.getElementById('form-title');
    
      formTitle.value = songs[index].title;
    
      const index = songs.findIndex(song => song.id === id);
      
      console.log("Before update: ", songs[index]);
  
      songs[index].title = newText;
      
      console.log("After update: ", songs[index ]);
      renderSongs(songs);
    
   
  }
 
}

export default AudioManager;
