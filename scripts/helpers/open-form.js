const btnEdit = document.getElementById("btn-edit");

// Функция для обработки события нажатия на кнопку
function handleClick(event) {
    // Получаем ID нажатой кнопки
    const buttonId = event.target.id;
    if(buttonId === 'open-form'){
        console.log(`Нажата кнопка ADD`);
    }
    if(buttonId === 'btn-edit'){
        btnEdit.addEventListener('click', (event) => {
    handleClick(event);
    console.log(111);
});
    }
}



