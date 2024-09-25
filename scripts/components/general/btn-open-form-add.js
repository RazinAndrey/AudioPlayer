import { addSong } from "../../modules/songs/add-song.js";

class BtnOpenFormAdd {
    static render() {
        const btnOpenFormAdd = document.createElement('button');
        btnOpenFormAdd.id = 'btn-open-form-add';
        btnOpenFormAdd.className = 'btn-open-form-add';
        btnOpenFormAdd.textContent = '+';
        document.body.appendChild(btnOpenFormAdd);
        btnOpenFormAdd.onclick = () => addSong();
    }
}

export default BtnOpenFormAdd;