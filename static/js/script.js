const pageDict = [
    {
        pictureSource: "images/desktop-image-hero-1.jpg",
        mobilePictureSource: "images/mobile-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        pictureSource: "images/desktop-image-hero-2.jpg",
        mobilePictureSource: "images/mobile-image-hero-2.jpg",
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        pictureSource: "images/desktop-image-hero-3.jpg",
        mobilePictureSource: "images/mobile-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];


document.addEventListener('DOMContentLoaded', () => {
    let galleryIndex = 0;
    const sliderNextBtn = document.getElementById("slider-left-btn");
    const sliderPrevBtn = document.getElementById("slider-right-btn");

    // For Mobile
    const mobileSliderNextBtn = document.getElementById("mobile-slider-left-btn");
    const mobileSliderPrevBtn = document.getElementById("mobile-slider-right-btn");


    // Start Index
    // Set the initial image and text content
    sliderGallery(0);

    /* For Desktop and big screen */
    sliderNextBtn.addEventListener("click", () => {
        if (galleryIndex >= pageDict.length - 1) {
            galleryIndex = 0;
        } else {
            galleryIndex++;
        }

        sliderGallery(galleryIndex);
    });

    sliderPrevBtn.addEventListener("click", () => {
        if (galleryIndex <= 0) {
            galleryIndex = pageDict.length - 1;
        } else {
            galleryIndex--;
        }

        sliderGallery(galleryIndex);
    });


    /* For Mobile */
    
    mobileSliderNextBtn.addEventListener('click', () => {
        if (galleryIndex >= pageDict.length - 1) {
            galleryIndex = 0;
        } else {
            galleryIndex++;
        }

        sliderGallery(galleryIndex);
    });

    mobileSliderPrevBtn.addEventListener('click' , () => {
        if (galleryIndex <= 0) {
            galleryIndex = pageDict.length - 1;
        } else {
            galleryIndex--;
        }

        sliderGallery(galleryIndex);
    });

    /* For Mobile Navbar */
    // Mobile Navbar Button and Close Button */
    const mobileNavbarBtn = document.getElementById("mobile-nav-btn");
    const mobileCloseBtn = document.getElementById("mobile-close-btn");

    mobileNavbarBtn.addEventListener("click", () => {
        mobileNavbar(true);
    });
    mobileCloseBtn.addEventListener("click", () => {
        mobileNavbar(false);
    });

    
});


function sliderGallery(index) {
    try {
        let currentIndex = index;
        let mobileSize = false;

        const bannerPicture =  document.querySelector(".slider-banner");
        const titleField = document.querySelector(".product-title-field");
        const descriptionField = document.querySelector(".product-description-field");
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        mediaQuery.addEventListener('change', handleScreenChange);

        mobileSize = handleScreenChange(mediaQuery);

        console.log(mobileSize);

        if (index >= pageDict.length) {
            index = 0;
        } else if (index < 0) {
            index = pageDict.length - 1;
        }
        
        titleField.textContent = pageDict[currentIndex].title;
        descriptionField.textContent = pageDict[currentIndex].description;

        if (mobileSize) {
            bannerPicture.style.backgroundImage = `url(${pageDict[currentIndex].mobilePictureSource})`;
        }
        else {
            bannerPicture.style.backgroundImage = `url(${pageDict[currentIndex].pictureSource})`;
        }
   
        currentIndex++;
    } catch(error) {
        console.log(error);
    }
}

function mobileNavbar(status) {
    const mobileNavbarContainer = document.querySelector(".mobile-navbar");

    if(status) {
        if (mobileNavbarContainer.classList.contains("disable")) {
            mobileNavbarContainer.classList.remove("disable");
            mobileNavbarContainer.classList.add("active");
        }
    }
    else {
        if (mobileNavbarContainer.classList.contains("active")) {
            mobileNavbarContainer.classList.remove("active");
            mobileNavbarContainer.classList.add("disable");
        }
    }
}




function handleScreenChange(e) {
    if (e.matches) {
        return true;
    }
    else {
        return false;
    }
}
