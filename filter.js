import { renderSongs } from "./main.js";

class Filter{

    // поиск
    static searchInput = document.getElementById('search-input');
    static searchSongs = (data) => {
        const search = this.searchInput.value.toLowerCase();
        data = data.filter(item => item.title.toLowerCase().includes(search));
        this.showResult(data);
    }

    // показать понравившиеся
    static btnLoved = document.getElementById('btn-loved');
    static showLoved = (data) => {
        data = data.filter(item => item.loved === true)
        this.showResult(data);
    }

    // показать все
    static btnAll = document.getElementById('btn-all');
    static showAll  = (data) => {
        this.showResult(data);
    };

    // результат null
    static resultsNull = document.getElementById('result-null');
    static showResult(data) {
        if (data.length > 0) {
            this.resultsNull.style.display = 'none';
            renderSongs(data);
            this.showLength(data);
        } else {
            renderSongs(data);
            this.resultsNull.style.display = 'block';
            this.resultsNull.textContent = 'Результатов не найдено.';
            this.showLength(data);
        }
    }

    // кол-во объектов
    static lengthSongs = document.getElementById('length-data');
    static showLength(data) {
        this.lengthSongs.textContent = data.length;
    }

}

export default Filter;
