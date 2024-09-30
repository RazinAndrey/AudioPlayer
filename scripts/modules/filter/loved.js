
import { changeLoved } from "../songs/change-loved.js";
import Filter from "./filter.js";


class Loved {
    static showResult(songs) {
        songs = songs.filter(item => item.loved === true);
        
        Filter.showResult(songs);
       
        const searchInput = document.getElementById('search-input');
        searchInput.value = '';
    }
}

export default Loved;