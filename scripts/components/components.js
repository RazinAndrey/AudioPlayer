import FormAddComponent from "./forms/form-add-component.js";
import FormEditComponent from "./forms/form-edit-component.js";
import PreviewAdd from "./forms/prewiew-add-component.js";
import PreviewEdit from "./forms/prewiew-edit-component.js";
import BtnOpenFormAdd from "./general/btn-open-form-add.js";
import FilterComponent from "./general/filter-component.js";
import FooterComponent from "./general/footer-component.js";
import HeaderComponent from "./general/header-component.js";
import NullResult from "./songs-list/null-result.js";
import QuantityComponent from "./songs-list/quantity-component.js";
import SongComponent from "./songs-list/song-component.js";
import SongsListComponent from "./songs-list/songs-list-component.js";

class Components {

    static songs = [];
    static genres = [];

    constructor(songs, genres) {
        this.genres = genres;
        this.songs = songs;
    }

    render() {
        HeaderComponent.render();
        FilterComponent.render(this.songs, this.genres);
        NullResult.render();
        SongsListComponent.render();
        SongComponent.render(this.songs);
        QuantityComponent.render(this.songs);
        FormEditComponent.render(this.songs, this.genres);
        FormAddComponent.render(this.songs, this.genres);
        PreviewAdd.render();
        PreviewEdit.render();
        BtnOpenFormAdd.render();
        FooterComponent.render();
    }

}

export default Components;