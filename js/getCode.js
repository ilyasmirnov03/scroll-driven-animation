async function getFile(file) {
    return new Promise((resolve) => {
        fetch(file)
            .then(res => res.text())
            .then(data => resolve(data));
    });
}

async function createCodeElement(file, lang) {
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.classList.add(lang);
    const codeValue = await getFile(file);
    code.innerHTML = hljs.highlight(
        codeValue,
        { language: lang }
    ).value;
    pre.appendChild(code);
    document.body.appendChild(pre);
}

window.addEventListener('DOMContentLoaded', async () => {
    createCodeElement('styles/styles.css', 'css');
});