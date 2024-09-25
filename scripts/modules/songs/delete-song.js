import { songsData } from "../../../data/songs-data.js";
import { activeBtn } from "../filter/active.js";
import Filter from "../filter/filter.js";


let songs = songsData;

export const deleteSong = (songId) => {

    const index = songs.findIndex((song) => song.id === songId);
    songs.splice(index, 1);

    Filter.showResult(songs);

    const btnAll = document.getElementById('btn-all');
    activeBtn(btnAll);
}