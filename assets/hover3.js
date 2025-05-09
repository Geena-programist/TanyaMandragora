const hover3 = () => {
    const imageContainer = document.querySelector('.image-container-2');
    const images = imageContainer.querySelectorAll('img');
    let currentIndex = 0; // Индекс текущего видимого изображения

    imageContainer.addEventListener('wheel', (event) => {
        event.preventDefault(); // Предотвращаем прокрутку страницы

        // Определяем направление прокрутки
        if (event.deltaY > 0) {
            // Прокрутка вниз
            if (currentIndex < images.length - 1) {
                images[currentIndex].classList.remove('visible'); // Скрываем текущее изображение
                currentIndex++; // Переходим к следующему изображению
                images[currentIndex].classList.add('visible'); // Показываем следующее изображение
            }
        } else {
            // Прокрутка вверх
            if (currentIndex > 0) {
                images[currentIndex].classList.remove('visible'); // Скрываем текущее изображение
                currentIndex--; // Переходим к предыдущему изображению
                images[currentIndex].classList.add('visible'); // Показываем предыдущее изображение
            }
        }
    });
};
document.addEventListener('DOMContentLoaded',()=>{
    hover3()
})