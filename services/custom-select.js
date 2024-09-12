import { genresData, songsData } from "../data/songs.js";
import Filter from "../audio-filter/audio-filter.js"

let genres = genresData;

let songs = songsData;  

class CustomSelect extends Filter{

    // поиск
    static searchInput = document.getElementById('search-input');
    static searchSongs = (data) => {
        const search = this.searchInput.value.toLowerCase();
        data = data.filter(item => item.title.toLowerCase().includes(search));
        this.showResult(data);

        this.btnResult.textContent = genres[0];
        this.activeBtn(this.btnResult);
       
    }
    
    static selected = document.getElementById('select-selected');

    static btnResult = document.getElementById('genres');

    static itemsContainer = document.getElementById('select-items');

    static showCustomSelect(){    

        this.selected.textContent = 'Genres ▼';
        this.btnResult.textContent = genres[0];        

        this.activeBtn(this.btnResult); 
        
        // добавление элементов в контейнер
        genres.forEach((genre) => {

            const item = document.createElement('button');
            item.className = 'btn-filter';
            item.textContent = genre;

            item.onclick = () => {

                this.itemsContainer.classList.remove("hiden");

                this.btnResult.textContent = genre;
               
                if(genre === 'All'){
                    this.activeBtn(this.btnResult);
                    return this.showResult(songs);
                }

                const results = this.searchGenres(genre);
                this.showResult(results);
                this.activeBtn(this.btnResult);
              
            };
       
            this.itemsContainer.appendChild(item);
        });

        

        this.selected.onclick = () => {
          
            this.searchInput.value = '';

            this.itemsContainer.classList.toggle("hiden");

            this.activeBtn(this.selected);
        }

        this.btnResult.onclick = () => {

            this.searchInput.value = '';

            const results = this.searchGenres(this.btnResult.textContent);

            if(this.btnResult.textContent === 'All') {
                this.activeBtn(this.btnResult);
                return this.showResult(songs);
            }
            this.activeBtn(this.btnResult);
            this.showResult(results);

        }        

        // закрыть при нажатии вне списка
        window.onclick = (event) => {
            if (event.target !== this.itemsContainer && event.target !== this.selected) {
                this.itemsContainer.classList.add("hiden");
                // this.activeBtn(this.btnResult);
            }
        }
    }

    // поиск по жанру
    static searchGenres(value){  
        return songs.filter(song => song.author === value); 
    }
}

export default CustomSelect;