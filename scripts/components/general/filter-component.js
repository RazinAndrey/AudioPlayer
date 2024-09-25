import All from "../../modules/filter/all.js";
import Loved from "../../modules/filter/loved.js";
import Search from "../../modules/filter/search.js";
import Sort from "../../modules/filter/sort.js";
import { activeBtn } from "../../modules/filter/active.js";

class FilterComponent {
    static render(songs, genres) {
        const search = document.createElement('input');
        search.id = 'search-input';
        search.className = 'search-input';
        search.placeholder = 'search';
        search.autocomplete = 'off';
        document.body.appendChild(search);
        search.addEventListener('input', () => Search.showResult(songs));

        const blockBtnsFilter = document.createElement('div');
        blockBtnsFilter.className = 'block-filter';
        document.body.appendChild(blockBtnsFilter);

        const btnAll = document.createElement('button');
        btnAll.id = 'btn-all';
        btnAll.className = 'btn-filter';
        btnAll.type = 'button';
        btnAll.textContent = 'All';
        blockBtnsFilter.appendChild(btnAll);
        btnAll.onclick = () => {
            All.showResult(songs);
            activeBtn(btnAll);
        }

        const btnLoved = document.createElement('button');
        btnLoved.id = 'btn-loved';
        btnLoved.className = 'btn-filter';
        btnLoved.type = 'button';
        btnLoved.textContent = 'Favorites';
        blockBtnsFilter.appendChild(btnLoved);
        btnLoved.onclick = () => {
            Loved.showResult(songs);
            activeBtn(btnLoved);
        }

        const genresItems = document.createElement('div');
        genresItems.id = 'genres-items';
        genresItems.className = 'genres-items';
        document.body.appendChild(genresItems);

        genres.forEach((genre) => {
            const btnGenre = document.createElement('button');
            btnLoved.id = 'btn-loved';
            btnGenre.className = 'btn-filter';
            btnGenre.textContent = genre;
            genresItems.appendChild(btnGenre);
            btnGenre.onclick = () => {
                Sort.showResult(songs, genre);
                activeBtn(btnGenre);
            };
        });
    }
}

export default FilterComponent;

