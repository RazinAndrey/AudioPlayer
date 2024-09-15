import { songsData } from "../data/songs.js";
import { genresData } from "../data/songs.js";
import { renderSongs } from "../scripts/components/render-songs.js";

const songs = songsData;
const genres = genresData;

class SongsManager {

  static form = document.getElementById('form');
  static overlay = document.getElementById('overlay');

  static openModalButton = document.getElementById('open-form');
  static closeModalButton = document.getElementById('close-form');

  static imageInput = document.getElementById('image-input');
  static imagePreview = document.getElementById('image-preview');

  static audioInput = document.getElementById('audio-input');
  static audioPreview = document.getElementById('audio-preview');

  static Preview() {

    const PreviewAudio = this.audioPreview;
    const PreviewImg = this.imagePreview;

    // превью картинки
    this.imageInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          PreviewImg.innerHTML = '<img src="' + event.target.result + '" alt="Preview">';
        };
        reader.readAsDataURL(file);
      } else {
        PreviewImg.innerHTML = '<span>Предпросмотр</span>';
      }
    });
    // превью музыки
    this.audioInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        PreviewAudio.textContent = file.name;
      } else {
        PreviewImg.innerHTML = '<span>Название музыки</span>';
      }
    });
  }

  static selectElement = document.getElementById('genre-form');

  // жанры
  static listGenres() {
    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre;
      option.className = 'option'
      this.selectElement.appendChild(option);
    });
  }

  // добаление
  static addSong() {

    // const genre = this.selectElement;
    // const PreviewAudio = this.audioPreview;
    // const PreviewImg = this.imagePreview;
    // const formAdd = this.form;
    // const overlayAdd = this.overlay;
    // const imageInput = this.imageInput;
    // const audioInput = this.audioInput;

    // formAdd.addEventListener('submit', function (event) {

    // event.preventDefault();

    const title = document.getElementById('title-form').value;
    const author = document.getElementById('author-form').value;
    const musicFile = this.audioInput.files[0];
    const imageFile = this.imageInput.files[0];
    const genre = this.selectElement.value;

    if (musicFile && imageFile) {

      const readerMusic = new FileReader();
      const readerImage = new FileReader();

      let musicObj = {
        title: title,
        author: author,
        genre: genre,
        audio: '',
        image: ''
      };

      readerMusic.onload = function (e) {
        musicObj.audio = e.target.result;
      };

      readerMusic.readAsDataURL(musicFile);

      readerImage.onload = function (e) {
        musicObj.image = e.target.result;
        songs.push(musicObj);
        renderSongs(songs);
      };

      readerImage.readAsDataURL(imageFile);

      this.form.reset();

      this.form.style.display = 'none';
      this.overlay.style.display = 'none';

      this.imagePreview.innerHTML = '<span>Предпросмотр</span>';
      this.audioPreview.innerHTML = '<span>Название музыки</span>';
    }
    // });
  }

  // редактирование музыки
  editSong() {
    const genre = this.selectElement;
    const PreviewAudio = this.audioPreview;
    const PreviewImg = this.imagePreview;
    const formAdd = this.form;
    const overlayAdd = this.overlay;
    const imageInput = this.imageInput;
    const audioInput = this.audioInput;


  }

}

export default SongsManager;
