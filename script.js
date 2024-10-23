document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        let isDown = false;
        let starX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            starX = e.pageX - carousel.offsetLeft;
            scrollLeft - carousel.scrollLeft;


        })
    })
})
