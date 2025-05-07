const hover3 = () => {
    var pixels = 1530;

    document.getElementById("scroll-img-korobka").style.width = `${pixels}px`;
    document.getElementById("scroll-img-korobka").style.height = `${pixels / 1.3}px`;
    console.log(window.innerWidth)
    console.log(window.innerWidth * 0.5)

    const imageContainer = document.querySelector('.image-container-2');
    const currentImage = document.getElementById('currentImage');
    const images = [
        "presets/project/4/korobka/1.png",
        "presets/project/4/korobka/2.png",
        "presets/project/4/korobka/3.png",
        "presets/project/4/korobka/4.png",
        "presets/project/4/korobka/5.png",
        "presets/project/4/korobka/6.png",
        "presets/project/4/korobka/7.png",
        "presets/project/4/korobka/8.png",
        "presets/project/4/korobka/9.png",
        "presets/project/4/korobka/10.png",
        "presets/project/4/korobka/11.png",
        "presets/project/4/korobka/12.png",
        "presets/project/4/korobka/13.png",
        "presets/project/4/korobka/14.png",
        "presets/project/4/korobka/15.png",
        "presets/project/4/korobka/16.png",
        "presets/project/4/korobka/17.png",
        "presets/project/4/korobka/18.png",
        "presets/project/4/korobka/19.png",
        "presets/project/4/korobka/20.png",
        // Добавьте сюда URL остальных изображений
    ];
    let currentIndex = 0;
    let isHovered = false;

    imageContainer.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    imageContainer.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    imageContainer.addEventListener('wheel', (event) => {
        if(currentIndex !== 19) {
            if (isHovered) {
                event.preventDefault();
                if (event.deltaY > 0) {
                    currentIndex = (currentIndex + 1) % images.length;
                }
                currentImage.src = images[currentIndex];
            }
        }
    });
};
document.addEventListener('DOMContentLoaded',()=>{
    hover3()
})