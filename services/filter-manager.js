import { renderSongs } from "../scripts/components/render-songs.js";

import { songsData } from "../data/songs.js";

let songs = songsData;

class Filter {

    // поиск
    static searchInput = document.getElementById('search-input');
    static searchSongs = (data) => {
        const search = this.searchInput.value.toLowerCase();
        data = data.filter(item => item.title.toLowerCase().includes(search));
        this.showResult(data);
        this.activeBtn(this.btnAll);
    }

    static filterValue = 'all';

    // показать понравившиеся
    static btnLoved = document.getElementById('btn-loved');
    static showLoved(data) {
        this.searchInput.value = '';
        this.filterValue = 'loved';
        data = data.filter(item => item.loved === true);
        this.showResult(data);
        this.activeBtn(this.btnLoved);
    }

    // показать все
    static btnAll = document.getElementById('btn-all');
    static showAll(data) {
        this.filterValue = 'all';
        this.showResult(data);
        this.activeBtn(this.btnAll);
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
        const index = songs.findIndex((item) => item.id === id);
        songs[index].loved = !songs[index].loved;
        this.AnotherOrLoved();
    }

    // удаление
    static deleteSong = (id) => {
        const index = songs.findIndex((song) => song.id === id);
        songs.splice(index, 1);
        this.AnotherOrLoved();
    }

    // показываем нужные элементы списка 
    static AnotherOrLoved = () => {
        if (this.filterValue === 'loved') {
            this.showLoved(songs);
            return;
        }
        renderSongs(songs);
    }

    // активная кнопка
    static activeBtn(button) {
        const buttons = document.querySelectorAll('.btn-filter');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        // добавляем класс active к нажатой кнопке
        button.classList.add('active');
    }
}

export default Filter;
