// активная кнопка
export const activeBtn = (button) => {
    const buttons = document.querySelectorAll('.btn-filter');
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    button.classList.add('active');
}