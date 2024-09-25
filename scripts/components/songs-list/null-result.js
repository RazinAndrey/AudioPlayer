class NullResult {
    static render() {
        const nullResult = document.createElement('div');
        nullResult.id = 'result-null';
        nullResult.className = 'result-null';
        nullResult.textContent = 'Результатов нет';
        nullResult.style.display = 'none';
        document.body.appendChild(nullResult);
    }
}

export default NullResult;


