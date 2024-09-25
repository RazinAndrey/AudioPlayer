class QuantityComponent {
    static render(songs) {
        const quantity = document.createElement('div');
        quantity.innerHTML = '';
        quantity.id = 'quantity';
        quantity.className = 'quantity';
        quantity.textContent = `Кол-во песен: ${songs.length}`;
        document.body.appendChild(quantity);
    }
}

export default QuantityComponent;