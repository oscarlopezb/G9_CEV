window.addEventListener('load', () => {
    renderSlider();
    mySlider();
    renderSubmenu();
    renderGallery();
});

const renderSlider = () => {
    const renderSlider = document.querySelector('.swiper-wrapper');
    let htmlString = "";
    for (let i = 0; i < home.slider.length; i++) {
        const sliderHTMLString = `
        <div class="swiper-slide"><img src="${home.slider[i].img}"></div>
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

const renderSubmenu = () => {
    const submenuClick1 = document.querySelector('.click1');
    const submenuClick2 = document.querySelector('.click2');
    const submenuClick3 = document.querySelector('.click3');

    const inspiration = document.querySelector('.inspiration_menu');
    const findWork = document.querySelector('.findwork_menu');
    const hireDesigners = document.querySelector('.hire_menu');

    const header = document.querySelector('.header');
    
    ///

    submenuClick1.addEventListener('click', () => {
        inspiration.classList.toggle('opened');
    });

    submenuClick2.addEventListener('click', () => {
        findWork.classList.toggle('opened');
    });

    submenuClick3.addEventListener('click', () => {
        hireDesigners.classList.toggle('opened');
    });
    
    ///

    header.addEventListener("mouseleave", () => {
        inspiration.classList.remove("opened");
    });

    header.addEventListener("mouseleave", () => {
        findWork.classList.remove("opened");
    });

    header.addEventListener("mouseleave", () => {
        hireDesigners.classList.remove("opened");
    });

    /////

    window.addEventListener('click', (ev) => {
        if (!ev.path.includes(submenuClick1) && !ev.path.includes(inspiration)) {
            inspiration.classList.remove("opened");
        }
    });

    window.addEventListener('click', (ev) => {
        if (!ev.path.includes(submenuClick2) && !ev.path.includes(findWork)) {
            findWork.classList.remove("opened");
        }
    });

    window.addEventListener('click', (ev) => {
        if (!ev.path.includes(submenuClick3) && !ev.path.includes(hireDesigners)) {
            hireDesigners.classList.remove("opened");
        }
    });

    ///

    document.addEventListener('keyup', (ev) => {
        if (ev.key == "Escape") {
            inspiration.classList.remove('opened');
        }
    });
};

const renderGallery = () => {
    const galleryHolder = document.querySelector('.gallery_items');
    let htmlString = "";
    for (let i = 0; i < home.gallery.length; i++) {
        const galleryHTMLString = `
                <article class="gallery_item">
                    <div class="bg">
                        <div class="gradient"></div>
                        <img class="img_project" src="${home.gallery[i].img}"
                            alt="" width="20%">
                        <div class="content">
                            <div class="author">
                                <div class="pic">
                                    <img class="img_author" src="${home.gallery[i].author.img}"
                                        alt="">
                                </div>
                                <a href="#"><div class="name">${home.gallery[i].author.name}</div></a>
                                <div class="type">
                                    <a href="#" class="pro">PRO</a>
                                    <a href="#" class="team">TEAM</a>
                                </div>
                            </div>
                            <div class="meta">
                                <div class="likes">
                                    <div class="fa fa-heart"></div>
                                    <p>10</p>
                                </div>
                                <div class="views">
                                    <div class="fa fa-eye"></div>
                                    <p>143</p>
                                </div>
                            </div>
                        </div>
                        <div class="gallery_hover">
                            <div class="hover_title">
                                Doku - Digital Wallet App
                            </div>
                            <div class="icons">
                                <a href="#"><div class="fa fa-folder"></div></a>
                                <a href="#"><div class="fa fa-heart"></div></a>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        htmlString += galleryHTMLString;
    }
    galleryHolder.innerHTML = htmlString;
};
