import SongComponent from "../../components/songs-list/song-component.js";

class Filter {
    static showResult(songs) {

        const nullResult = document.getElementById('result-null');
        const quantity = document.getElementById('quantity');

        console.log(songs);
        if (songs.length > 0) {

            SongComponent.render(songs);

            quantity.textContent = `Кол-во песен: ${songs.length}`;
            nullResult.style.display = 'none';
        }
        else {

            SongComponent.render(songs);

            quantity.textContent = `Кол-во песен: ${songs.length}`;
            nullResult.style.display = 'block';
        }
    }
}

export default Filter;