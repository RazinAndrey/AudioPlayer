import { songsData } from "/data/songs.js";
import { renderSongs } from "../main.js";

let songs = songsData;

export const addLovedSong = (index) => {
    
    if(songs[index].loved === true){
        songs[index].loved = false;
    }else{
        songs[index].loved = true;
    }   
    renderSongs(songs);
}
