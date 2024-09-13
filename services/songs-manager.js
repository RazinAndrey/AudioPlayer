import { songsData } from "../data/songs.js";

const songs = songsData;

class SongsManager {

  static form = document.getElementById('form');
  static overlay = document.getElementById('overlay');

  static openModalButton = document.getElementById('open-form');
  static closeModalButton = document.getElementById('close-form');

  static imageInput = document.getElementById('image-input');
  static imagePreview = document.getElementById('image-preview');

  static audioInput = document.getElementById('audio-input');
  static audioPreview = document.getElementById('audio-preview');

  static Preview(){
    // превью картинки
    this.imageInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(event) {
            this.imagePreview.innerHTML = '<img src="' + event.target.result + '" alt="Preview">';
          };
          reader.readAsDataURL(file);
      } else {
        this.imagePreview.innerHTML = '<span>Предпросмотр</span>';
      }
    });
    // превью музыки
    this.audioInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        this.audioPreview.textContent = file.name;
      } else {
        this.audioPreview.innerHTML = '<span>Название музыки</span>';
      }
    });
  } 

  static selectElement = document.getElementById('genre-form');

  // жанры
  static listGenres(){
    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre;
      option.className = 'option'
      selectElement.appendChild(option);
    });
  }

  // добаление
  static addSong(){
    form.addEventListener('submit', function(event) {
      const title = document.getElementById('title-form').value;
      const author = document.getElementById('author-form').value;
      const musicFile = audioInput.files[0];
      const imageFile = imageInput.files[0];

      event.preventDefault();

      if (musicFile && imageFile) {
        const readerMusic = new FileReader();
        const readerImage = new FileReader();
        let musicObj = {
            title: title,
            author: author,
            audio: '',
            image: ''
          };
        readerMusic.onload = function(e) {
          musicObj.audio = e.target.result;
        };

        readerMusic.readAsDataURL(musicFile);
          
        readerImage.onload = function(e) {
          musicObj.image = e.target.result;
          songs.push(musicObj);
          Filter.showAll(songs);
        };

        readerImage.readAsDataURL(imageFile);

        this.form.reset();
        this.form.style.display = 'none';
        this.overlay.style.display = 'none';

        this.imagePreview.innerHTML = '<span>Предпросмотр</span>';
        this.audioPreview.innerHTML = '<span>Название музыки</span>';
      }
    });
  }

  // Функция для редактирования музыки

}

export default SongsManager;
