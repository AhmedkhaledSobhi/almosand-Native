let initialSlidesPerView = 11;

if (window.innerWidth < 768) {
    // Change slides per view for smaller screens
    initialSlidesPerView = 3; 
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: initialSlidesPerView,
    spaceBetween: 5,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



