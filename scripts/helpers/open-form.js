const btnEdit = document.getElementById("btn-edit");

// Функция для обработки события нажатия на кнопку
export function handleClick(event) {
    // Получаем ID нажатой кнопки
    const buttonId = event.target.id;
    if(buttonId === 'open-form-add'){
        console.log(`Нажата кнопка ADD`);
    }
}



