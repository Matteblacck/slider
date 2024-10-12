const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlideIndex = 0;

function showSlide(index){
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Устанавливаем класс active для текущего слайда
    slides[index].style.display = 'block';
}

function changeSlide(direction){
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

// Инициализация: показываем первый слайд
showSlide(currentSlideIndex);