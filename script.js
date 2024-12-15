document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('registration-modal');
    const closeButton = document.querySelector('.close-button');

    // Показать модальное окно через 1 секунду
    setTimeout(() => {
        modal.style.display = 'block';
    }, 1000);

    // Закрытие модального окна
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
let currentVideo = 0;
const videos = [
    "video/house1.mp4", // Видео для дома 1
    "video/house2.mp4", // Видео для дома 2 (добавьте пути для других домов)
    "video/house3.mp4"  // Видео для дома 3 (добавьте пути для других домов)
];

function openModal(index) {
    currentVideo = index; // Сохраняем индекс видео
    const modal = document.getElementById('modal');
    const videoElement = document.getElementById('modal-video');
    videoElement.src = videos[currentVideo]; // Устанавливаем видео для модального окна
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function changeVideo(direction) {
    currentVideo += direction; // Меняем индекс видео
    if (currentVideo < 0) {
        currentVideo = videos.length - 1;
    } else if (currentVideo >= videos.length) {
        currentVideo = 0;
    }
    const videoElement = document.getElementById('modal-video');
    videoElement.src = videos[currentVideo]; // Обновляем видео
}


