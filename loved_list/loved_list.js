
import { songsData } from "../data/songs.js";

const traks = songsData;

const listLoved = document.getElementById('songs-loved');

export const loadLovedSongs = () =>{
    listLoved.innerHTML = traks
        .filter((item) => (item.loved === true))
        .map(item => `<div class="qqq" id="qqq">${item.author} - ${item.id}</div>`)
        // .slice(0, 2)
        .join('');    
}

