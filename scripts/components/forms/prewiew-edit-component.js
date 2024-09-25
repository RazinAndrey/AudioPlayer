class PreviewEdit {
    static render() {
        const imageInput = document.getElementById('image-input-edit');
        const audioInput = document.getElementById('audio-input-edit');

        // превью картинки
        imageInput.addEventListener('change', function () {

            const imagePreview = document.getElementById('image-preview-edit');

            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    imagePreview.innerHTML = '<img src="' + event.target.result + '" alt="Preview">';
                };
                reader.readAsDataURL(file);
            } else {
                imagePreview.innerHTML = '<span>Предпросмотр</span>';
            }
        });

        // превью музыки
        audioInput.addEventListener('change', function () {
            const audioPreview = document.getElementById('audio-preview-edit');
            const file = this.files[0];
            if (file) {
                let strSongs = file.name;
                let newStrSongs = strSongs.substring(14, 40);
                audioPreview.textContent = newStrSongs;
            } else {
                audioPreview.innerHTML = '<span>Название музыки</span>';
            }
        });
    }

}

export default PreviewEdit;