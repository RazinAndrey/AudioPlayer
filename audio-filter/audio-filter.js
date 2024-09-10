import { renderSongs } from "../audio-list/audio-list.js";
import { songsData } from "../data/songs.js";
let songs = songsData; 

class Filter{

    // поиск
    static searchInput = document.getElementById('search-input');
    static searchSongs = (data) => {
        const search = this.searchInput.value.toLowerCase();
        data = data.filter(item => item.title.toLowerCase().includes(search));
        this.showResult(data);
    }
    filterValue = 'all';
    // показать понравившиеся
    static btnLoved = document.getElementById('btn-loved');
    static showLoved = (data) => {
        this.filterValue = 'loved';
        data = data.filter(item => item.loved === true);
        this.showResult(data);
    }

    // показать все
    static btnAll = document.getElementById('btn-all');
    static showAll  = (data) => {
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
        if(this.filterValue === 'loved'){
            this.showLoved(songs);
            return;
        }
        renderSongs(songs);
    }


}

export default Filter;
