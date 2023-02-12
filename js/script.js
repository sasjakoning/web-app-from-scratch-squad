const documentsBtn = document.querySelector('.documents');
const documentsWindow = document.querySelector('.window');

documentsBtn.addEventListener('click', () => {
    documentsWindow.classList.toggle('window--visible');
});
