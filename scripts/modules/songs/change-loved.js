import Filter from "../filter/filter.js";

export const changeLoved = (songs, songId) => {
    const index = songs.findIndex((song) => song.id === songId);
    songs[index].loved = !songs[index].loved;
    Filter.showResult(songs);
}


