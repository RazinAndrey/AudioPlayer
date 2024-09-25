import { closeEditForm } from "../../modules/songs/edit-song.js";

class FormEditComponent {
    static render(songs, genres) {
        const blockForm = document.createElement('div');
        blockForm.id = 'form-edit';
        blockForm.className = 'form-edit';
        document.body.appendChild(blockForm);

        const form = document.createElement('form');
        form.id = 'form-edit-content';
        form.className = 'form-edit-content';
        form.textContent = 'Song Edit'
        blockForm.appendChild(form);

        this.blockInputs(form);

        this.blockGenres(form, genres);

        this.blockImage(form);

        this.blockMusic(form);

        this.blockBtns(form, songs);
    }

    static blockInputs(block) {
        const inputTitle = document.createElement('input');
        inputTitle.id = 'title-form-edit';
        inputTitle.className = 'title-form';
        inputTitle.type = 'text';
        inputTitle.autocomplete = 'off';
        inputTitle.placeholder = 'Название'
        block.appendChild(inputTitle);

        const inputAuthor = document.createElement('input');
        inputAuthor.id = 'author-form-edit';
        inputAuthor.className = 'author-form';
        inputAuthor.type = 'text';
        inputAuthor.autocomplete = 'off';
        inputAuthor.placeholder = 'Исполнитель'
        block.appendChild(inputAuthor);
    }

    static blockGenres(block, genres) {
        const select = document.createElement('select');
        select.id = 'genre-form-edit';
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
        input.id = 'image-input-edit';
        input.type = 'file';
        input.accept = 'image/*';
        label.appendChild(input);

        const preview = document.createElement('div');
        preview.id = 'image-preview-edit';
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
        input.id = 'audio-input-edit';
        input.type = 'file';
        input.accept = 'audio/*';
        label.appendChild(input);

        const preview = document.createElement('div');
        preview.id = 'audio-preview-edit';
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
        closeBtn.id = 'btn-back';
        closeBtn.className = 'btn-form';
        closeBtn.textContent = 'Back';
        closeBtn.type = 'button';
        closeBtn.onclick = () => closeEditForm();
        blockBtnsForm.appendChild(closeBtn);

        const editBtn = document.createElement('button');
        editBtn.id = 'btn-edit';
        editBtn.className = 'btn-form';
        editBtn.type = 'button';
        editBtn.textContent = 'Edit';
        editBtn.disabled = false;
        editBtn.addEventListener('sumbit', (event) => preventDefault(event))
        blockBtnsForm.appendChild(editBtn);
    }
}

export default FormEditComponent;