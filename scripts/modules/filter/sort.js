import Filter from "./filter.js";

class Sort {
    static showResult(songs, ganre) {
        

        songs = songs.filter(song => song.genre === ganre);
        Filter.showResult(songs);

        const searchInput = document.getElementById('search-input');
        searchInput.value = '';
    }
}

export default Sort;