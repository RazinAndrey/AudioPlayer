import { renderSongs } from "../audio-list/audio-list.js";

import { songsData } from "../data/songs.js";



let songs = songsData; 

class Filter{

   

    static filterValue = 'all';

    // показать понравившиеся
    static btnLoved = document.getElementById('btn-loved');
    static showLoved = (data) => {
        
        this.activeBtn(this.btnLoved);

        this.filterValue = 'loved';

        data = data.filter(item => item.loved === true);

        this.showResult(data);
    }

    // показать все

    static showAll = (data) => {

        this.filterValue = 'all';
        this.showResult(data);
    }

    // результат null
    static resultsNull = document.getElementById('result-null');
    static showResult(data) {
        if (data.length > 0) {
            this.resultsNull.style.display = 'none';
            renderSongs(data);
        } else {
            renderSongs(data);
            this.resultsNull.style.display = 'block';
            this.resultsNull.textContent = 'Результатов не найдено.';
            
        }
    }

    // добавить в избранные
    static changeLovedSong = (id) => {
        const index = songs.findIndex((song) => song.id === id);
        
        songs[index].loved = !songs[index].loved;

        this.AnotherOrLoved();
    }

    // удаление
    static deleteSong = (id) => {
      const index = songs.findIndex((song) => song.id === id);
      songs.splice(index, 1);

      this.AllOrLoved();
    }

    // показываем нужные элементы списка 
    static AnotherOrLoved = () => {
        if(this.filterValue === 'loved'){
            this.showLoved(songs);
            return;
        }
        renderSongs(songs);
    }


    // активная кнопка
    static activeBtn(button){
        const buttons = document.querySelectorAll('.btn-filter');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Добавляем класс active к нажатой кнопке
        button.classList.add('active');
    }
}

export default Filter;
