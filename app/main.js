window.addEventListener('load', () => {
    renderSlider();
    mySlider();
});

const renderSlider = () => {
    const renderSlider = document.querySelector('.swiper-wrapper');
    let htmlString = "";
    for (let i = 0; i < data.slider.length; i++) {
        const sliderHTMLString = `
            <div class="swiper-slide">
                <img src="${data.slider[i].img}">
            </div>
        `;
        htmlString += sliderHTMLString;
    }
    renderSlider.innerHTML = htmlString;
};

const mySlider = () => {
    const mySwiper = new Swiper('.swiper-container', {
        // Optional parameters

        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
};