import { genresData, songsData } from "../data/songs.js";
import {renderSongs} from "../audio-list/audio-list.js"
import Filter from "../audio-filter/audio-filter.js"
import { closeWindow } from "./closeWindow.js";

let genres = genresData;

let songs = songsData;  

class CustomSelect extends Filter{

    // поиск
    static searchInput = document.getElementById('search-input');
    static searchSongs = (data) => {
        const search = this.searchInput.value.toLowerCase();
        data = data.filter(item => item.title.toLowerCase().includes(search));
        this.showResult(data);

        // if(data.length = 0){
        //     this.activeBtn();
        // }
    }
    
    static selected = document.getElementById('select-selected');
    static showCustomSelect(){
       
       

        this.selected.textContent = genres[0];
        

        this.activeBtn(this.selected);  

        const itemsContainer = document.getElementById('select-items');
    
        // добавление элементов в контейнер
        genres.forEach((genre) => {
            const item = document.createElement('button');
            item.className = 'btn-filter';
            item.textContent = genre;
            item.onclick = () => {

                itemsContainer.classList.remove("hiden");

                this.selected.textContent = genre;
               
                if(genre === 'All'){
                    return this.showAll(songs);
                }

                const results = this.searchGenres(genre);
                this.showResult(results);
              
            };
            
       
            itemsContainer.appendChild(item);
        });

        // переключение видимости выпадающего списка
        this.selected.onclick = () => {
          
            const results = this.searchGenres(this.selected.textContent);

            if(this.selected.textContent === 'All') {
                itemsContainer.classList.toggle("hiden");
                this.activeBtn(this.selected);
                return this.showResult(this.selected);
            }
        

            this.showResult(results);
            
        
            itemsContainer.classList.toggle("hiden");
            this.activeBtn(this.selected);
        }

        // закрыть при нажатии на вне списка
        window.onclick = (event) => {
            if (event.target !== itemsContainer && event.target !== this.selected) {
                itemsContainer.classList.add("hiden");
            }
            
        }
    }

    // поиск по жанру
    static searchGenres(value){   
        return songs.filter(song => song.author === value); 
    }

   
}

export default CustomSelect;