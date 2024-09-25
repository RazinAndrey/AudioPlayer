import { activeBtn } from "../../modules/filter/active.js";

class SongsListComponent {
    static render() {
        const songsList = document.createElement('div');
        songsList.id = 'songs-list';
        songsList.className = 'songs-list';
        document.body.appendChild(songsList);

        const btnAll = document.getElementById('btn-all');
        activeBtn(btnAll);
    }
}

export default SongsListComponent;