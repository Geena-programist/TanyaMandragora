const hover2 = () => {
    const cont = document.getElementsByClassName('cont-img-container');

    // Преобразуем HTMLCollection в массив
    Array.from(cont).forEach(container => {
        const images = container.querySelectorAll('.image');
    
        container.addEventListener('mouseenter', () => {
            images[0].classList.add('none'); // Скрываем первое изображение
            images[1].classList.remove('none'); // Показываем второе изображение
        });
    
        container.addEventListener('mouseleave', () => {
            images[0].classList.remove('none'); // Показываем первое изображение
            images[1].classList.add('none'); // Скрываем второе изображение
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    hover2();
});