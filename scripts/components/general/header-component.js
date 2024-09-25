class HeaderComponent {
    static render() {
        const header = document.createElement('div');
        header.id = 'main-title';
        header.className = 'main-title';
        header.textContent = 'Music';

        document.body.appendChild(header);
    }
}

export default HeaderComponent;