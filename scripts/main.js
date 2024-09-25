import { genresData, songsData } from "../data/songs-data.js";
import MediaManager from "./modules/media/media-manager.js";
import Components from "./components/components.js";
import { mediaClient } from "./modules/media/media-client.js";

let songs = songsData;
let genres = genresData;

const components = new Components(songs, genres);
components.render();

mediaClient();


