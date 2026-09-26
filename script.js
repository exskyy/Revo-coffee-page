const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', ()=>{
    video.play().catch(err => console.warn('Play failed:', err));;
    playBtn.style.display = 'none';
})


const swiper1 = new Swiper('.coffee__swiper', {
    speed: 600,
    grabCursor: true,
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    grid: {
        rows: 2,
        fill: 'row',
    },
    slidesPerView: 2,
    slidesPerGroup: 2,

    navigation: {
        nextEl: '.coffee__next',
        prevEl: '.coffee__prev',
    },

    breakpoints: {
        0:   { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30 },
    },
});

// Зацикливание вручную (loop + grid несовместимы)
swiper1.on('reachEnd', () => swiper1.slideTo(0));

const swiper2 = new Swiper('.swiper__combo', {
    // --- БАЗОВЫЕ НАСТРОЙКИ ---
    speed: 600,          // Скорость переключения (мс). Чем выше, тем плавнее. 
    effect: 'slide',     // Эффект перехода: 'slide' (сдвиг), 'fade' (затухание), 'cube', 'coverflow'
    grabCursor: true,    // Курсор мыши превращается в "руку" при наведении
    slidesPerView: 1,  // дефолт для мобильных
    slidesPerGroup: 1,
    spaceBetween: 20,
    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        480: {
        slidesPerView: 1,
        },
        768:  { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    },
    // --- АВТОПРОКРУТКА ---
    autoplay: {
        delay: 3000,                 // Задержка между слайдами (3 сек).
        disableOnInteraction: false, // Продолжать ли крутить после клика пользователя.
        pauseOnMouseEnter: true,     // Останавливать ли, если навести мышь.
    },
    // --- НАВИГАЦИЯ (КНОПКИ) ---
    navigation: {
        nextEl: '.combo__next',
        prevEl: '.combo__prev',
    },
});

const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');

tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

        tabs.forEach(btn => {
            btn.classList.remove('active');
        });

        cards.forEach(card => {
            card.classList.remove('active');
        });

        tab.classList.add('active');
        cards[index].classList.add('active');

    });

});