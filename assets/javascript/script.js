const selectedElement = (element) => document.querySelector(element);

selectedElement('.nav-i'),addEventListener('click', () => {
    selectedElement('nav').classList.toggle('active');
});