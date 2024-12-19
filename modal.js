const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModal');
    const youtubeVideo = document.getElementById('youtubeVideo');

    // Все превью
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    // Открытие модального окна при клике на превью
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoId = thumbnail.getAttribute('data-video-id'); // Получаем ID видео из data-video-id
            youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.style.display = 'flex';
        });
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        youtubeVideo.src = ""; // Останавливаем видео
    });

    // Закрытие при клике вне контента
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            youtubeVideo.src = "";
        }
    });