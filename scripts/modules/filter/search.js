import { activeBtn } from "./active.js";
import Filter from "./filter.js";

class Search {
    static showResult(songs) {
        const btnAll = document.getElementById('btn-all');
        activeBtn(btnAll);

        const searchInput = document.getElementById('search-input').value.toLowerCase();
        songs = songs.filter(song => song.title.toLowerCase().includes(searchInput));
        Filter.showResult(songs);
    }
}

export default Search;