import { genresData, songsData } from "../data/songs.js";
import Filter from "./filter-manager.js"

let songs = songsData;
let genres = genresData;

class GenresManager extends Filter{
    static currentIndex = 0;
    static itemsPerPage = 3; // количество элементов для отображения

    static prevBtn = document.getElementById('prev-btn');
    static nextBtn = document.getElementById('next-btn');
    static itemContainer = document.getElementById('genres-items');

    static showGenres() {
       
        this.itemContainer.innerHTML = ''; // очищаем контейнер

        // рассчитываем начинающий и конечный индексы
        const startIndex = this.currentIndex * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;

        // показываем нужные элементы
        const itemsToShow = genres.slice(startIndex, endIndex);
        itemsToShow.forEach((genre, index) => {
            const btnGenre = document.createElement('button');
            btnGenre.className = 'filter-btn';
            btnGenre.textContent = genre;
            this.itemContainer.appendChild(btnGenre);

           
            btnGenre.onclick = () => {
                const results = this.searchGenres(genre);
                this.showResult(results);
                this.colorBtnActGenre(index);
                btnGenre.classList.add('active');
                // this.activeBtn(btnGenre);
            };
           
        });

        // управление видимостью кнопок
        this.prevBtn.disabled = (this.currentIndex === 0);
        this.nextBtn.disabled = (endIndex >= genres.length);
    }
    constructor() {
        this.value = null; // Изначально значение равно null
    }

    // Метод для установки значения
    set value(value) {
        this.value = value;
    }

    // Метод для получения значения
    get value() {
        return this.value;
    }
    static colorBtnActGenre(index) {
        console.log(`Кнопка нажата. Текущее значение:  ${index}`);

        const buttons = document.querySelectorAll('.color-button');
        if (index >= 0 && index < buttons.length) {
            buttons[index].style.backgroundColor = 'red';
        } else {
            console.log('Индекс вне диапазона');
        }
    }
    // вперед
    static prevMethod(){
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.showGenres();
        }
    };

    // назад
    static nextMethod(){
        if ((this.currentIndex + 1) * this.itemsPerPage < genres.length) {
            this.currentIndex++;
            this.showGenres();
            // this.activeBtn(this.nextBtn);
        }
    }

    // поиск по жанру
    static searchGenres(value){ 
        return songs.filter(song => song.genre === value); 
    }
}

export default GenresManager;