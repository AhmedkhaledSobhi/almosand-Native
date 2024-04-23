let initialSlidesPerView = 10;

if (window.innerWidth < 768) {
    // Change slides per view for smaller screens
    initialSlidesPerView = 5; 
}


if (window.innerWidth < 995) {
    // Change slides per view for large screens
    initialSlidesPerView = 6; 
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: initialSlidesPerView,
    spaceBetween: 4,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// document.getElementById("closeCart")


document.getElementById("hideButton").addEventListener("click", function() {
    document.getElementById("item-to-hide").style.display = "none";
    document.querySelector('body').style.overflow = 'auto';
    document.getElementById("hideButton").style.display ="none";
    document.getElementById("showButton").style.display ="flex";
});

document.getElementById("showButton").addEventListener("click", function() {
    document.getElementById("item-to-hide").style.display = "block";
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById("hideButton").style.display ="flex";
    document.getElementById("showButton").style.display ="none";

});

