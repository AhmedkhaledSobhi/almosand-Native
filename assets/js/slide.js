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

// document.getElementById("closeCart")


document.getElementById("hideButton").addEventListener("click", function() {
    // Hide the item when the hide button is clicked
    document.getElementById("item-to-hide").style.display = "none";
    document.querySelector('body').style.overflow = 'auto';

});

document.getElementById("showButton").addEventListener("click", function() {
    // Show the item when the show button is clicked
    document.getElementById("item-to-hide").style.display = "block";
    document.querySelector('body').style.overflow = 'hidden';
});

