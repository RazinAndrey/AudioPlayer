import { songsData } from "../data/songs.js";
import { renderSongs } from "../main.js";
import Filter from "../filter.js";

let songs = songsData;

export const deleteSong = (id) => {
    songs = songs.filter(song => song.id !== id);
    renderSongs(songs);
    Filter.showLength(songs);
}

