class FooterComponent {
    static render() {

        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const resultDate = date.toLocaleDateString('ru-RU', options);

        const footer = document.createElement('div');
        footer.id = 'footer';
        footer.className = 'footer';
        footer.innerHTML = `
            <div>Разин А. Н.</div>
            <div>${resultDate}</div }
        `;

        document.body.appendChild(footer);
    }
}

export default FooterComponent;