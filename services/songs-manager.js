import { songsData } from "../data/songs.js";
import { renderSongs } from "../scripts/components/render-songs.js";

const songs = songsData;


export class SongsManager {

  constructor(songs = [], genres = []){
    this.genres = genres;
    this.songs = songs;
  }

  static form = document.getElementById('form');
  static overlay = document.getElementById('overlay');

  openFormAdd = document.getElementById('open-form-add');
  static openFormEdit = document.getElementById('open-form-edit');
  
  static btnAdd = document.getElementById('btn-add');
  static btnEdit = document.getElementById('btn-edit');

  static closeForm = document.getElementById('close-form');

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

  
  static title = document.getElementById('title-form');
  static author = document.getElementById('author-form');
  // добаление
  static addSong() {
    const title = this.title.value;
    const author = this.author.value;
    const musicFile = this.audioInput.files[0];
    const imageFile = this.imageInput.files[0];
    const genre = this.selectElement.value;

    if (musicFile && imageFile) {

      const readerMusic = new FileReader();
      const readerImage = new FileReader();

      let musicObj = {
        id: new Date(),
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
        console.log(musicObj); 
        renderSongs(songs);
      };

      readerImage.readAsDataURL(imageFile);

      this.form.reset();

      this.form.style.display = 'none';
      this.overlay.style.display = 'none';

      this.imagePreview.innerHTML = '<span>Предпросмотр</span>';
      this.audioPreview.innerHTML = '<span>Название музыки</span>';
    }
  }

  static editSong(id){

    this.btnAdd.style.display = 'none';
    this.btnEdit.style.display = 'block';

    const index = songs.findIndex(item => item.id === id);

    this.form.style.display = 'flex';
    this.overlay.style.display = 'block';

    this.title.value = songs[index].title;
    this.author.value = songs[index].author;
    this.selectElement.value = songs[index].genre;


    const imageInput = this.imageInput;
    const audioInput = this.audioInput;

    this.imagePreview.innerHTML = '<img src="' + songs[index].image + '" alt="Preview">';
    //this.audioPreview.innerHTML = songs[index].audio;
    
    fetch(songs[index].image)
      .then(response => response.blob())
      .then(blob => {
        // Создаем объект File из blob
        const file = new File([blob], `image${songs[index].id}.jpg`, { type: blob.type });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        imageInput.files = dataTransfer.files; // назначаем файлы в input

        console.log(imageInput.files);
      })
      .catch(error => {
        console.error("Ошибка загрузки изображения:", error);
      });

    fetch(songs[index].audio)
      .then(response => response.blob())
      .then(blob => {
        // Создаем объект File из blob
        const file = new File([blob], `audio${songs[index].audio}.mp3`, { type: blob.type });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

       
        audioInput.files = dataTransfer.files; // назначаем файлы в input

        // this.audioPreview.innerHTML =  songs[index].audio;
        console.log(audioInput.files);
      })
      .catch(error => {
        console.error("Ошибка загрузки изображения:", error);
      });

     
      // Функция для сохранения изменений
      this.btnEdit.addEventListener('click', (event) => {
        event.preventDefault();

        songs[index].title = this.title.value;
        songs[index].author = this.author.value;
        songs[index].genre = this.selectElement.value;

        this.imageInput.addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function(e) {
              console.log(e.target.result); // data URL
              songs[index].image = e.target.result;
            };
            reader.readAsDataURL(file); // Make sure `file` is of Blob type
          } else {
            console.error('No file selected');
          }
        });

        this.audioInput.addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function(e) {
              console.log(e.target.result); // data URL
              songs[index].audio = e.target.result;
            };
            reader.readAsDataURL(file); // Make sure `file` is of Blob type
            
          } else {
            console.error('No file selected');
          }
        });

        renderSongs(songs);


        // this.form.reset();
        this.imagePreview.innerHTML = '<span>Предпросмотр</span>';
        this.audioPreview.innerHTML = '<span>Название музыки</span>';
        this.form.style.display = 'none';
        this.overlay.style.display = 'none';

      
       

      });
  }

static closeForm(){
  this.form.reset();
  this.imagePreview.innerHTML = '<span>Предпросмотр</span>';
  this.audioPreview.innerHTML = '<span>Название музыки</span>';
  this.form.style.display = 'none';
  this.overlay.style.display = 'none';
}
  
}

export default SongsManager;
