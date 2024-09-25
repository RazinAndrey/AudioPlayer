import { addSong, closeAddForm } from "../../modules/songs/add-song.js";

class FormAddComponent {
    static render(songs, genres) {
        const blockForm = document.createElement('div');
        blockForm.id = 'form-add';
        blockForm.className = 'form-add';
        document.body.appendChild(blockForm);

        const form = document.createElement('form');
        form.id = 'form-add-content';
        form.className = 'form-add-content';
        form.textContent = 'Song Add';
        blockForm.appendChild(form);

        this.blockInputs(form);

        this.blockGenres(form, genres);

        this.blockImage(form);

        this.blockMusic(form);

        this.blockBtns(form, songs);
    }

    static blockInputs(block) {
        const inputTitle = document.createElement('input');
        inputTitle.id = 'title-form-add';
        inputTitle.className = 'title-form';
        inputTitle.type = 'text';
        inputTitle.autocomplete = 'off';
        inputTitle.placeholder = 'Название'
        block.appendChild(inputTitle);

        const inputAuthor = document.createElement('input');
        inputAuthor.id = 'author-form-add';
        inputAuthor.className = 'author-form';
        inputAuthor.type = 'text';
        inputAuthor.autocomplete = 'off';
        inputAuthor.placeholder = 'Исполнитель'
        block.appendChild(inputAuthor);
    }

    static blockGenres(block, genres) {
        const select = document.createElement('select');
        select.id = 'genre-form-add';
        select.className = 'genre-form';
        block.appendChild(select);

        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            option.className = 'option'
            select.appendChild(option);
        });
    }

    static blockImage(block) {
        const label = document.createElement('label');
        label.className = 'custom-button';
        label.textContent = 'Загрузить изображение';
        block.appendChild(label);

        const input = document.createElement('input');
        input.id = 'image-input-add';
        input.type = 'file';
        input.accept = 'image/*';
        label.appendChild(input);

        const preview = document.createElement('div');
        preview.id = 'image-preview-add';
        preview.className = 'image-preview';
        block.appendChild(preview);

        const span = document.createElement('span');
        span.id = 'text-preview';
        span.className = 'text-preview';
        span.textContent = 'Предпросмотр';
        preview.appendChild(span);
    }

    static blockMusic(block) {
        const label = document.createElement('label');
        label.className = 'custom-button';
        label.textContent = 'Загрузить музыку';
        block.appendChild(label);

        const input = document.createElement('input');
        input.id = 'audio-input-add';
        input.type = 'file';
        input.accept = 'audio/*';
        label.appendChild(input);

        const preview = document.createElement('div');
        preview.id = 'audio-preview-add';
        preview.className = 'audio-preview';
        block.appendChild(preview);

        const span = document.createElement('span');
        span.id = 'text-preview';
        span.className = 'text-preview';
        span.textContent = 'Предпросмотр';
        preview.appendChild(span);
    }

    static blockBtns(block) {
        const blockBtnsForm = document.createElement('div');
        blockBtnsForm.id = 'block-btns-form';
        blockBtnsForm.className = 'block-btns-form';
        block.appendChild(blockBtnsForm);

        const closeBtn = document.createElement('button');
        closeBtn.id = 'btn-back-add';
        closeBtn.className = 'btn-form';
        closeBtn.textContent = 'Back';
        closeBtn.type = 'button';
        closeBtn.onclick = () => closeAddForm();
        blockBtnsForm.appendChild(closeBtn);

        const addBtn = document.createElement('button');
        addBtn.id = 'btn-add';
        addBtn.className = 'btn-form';
        addBtn.type = 'button';
        addBtn.textContent = 'Add';
        addBtn.onclick = () => addSong();

        blockBtnsForm.appendChild(addBtn);
    }
}

export default FormAddComponent;