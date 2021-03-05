
const dots = document.querySelectorAll('.decision__dot'),
    slids = document.querySelectorAll('.decision__slid'),
    next = document.querySelector('.decision__next'),
    prev = document.querySelector('.decision__prev');

let index = 0;

const activeSlide = n => {
    for (slide of slids) {
        slide.classList.remove('active');
    }
    slids[n].classList.add('active');
};



const activeDots = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
    
};

const activeCurrent = ind => {
    activeSlide(ind);
    activeDots(ind);
};

const nextSlide = () => {
    if (index === slids.length - 1) {
        index = 0;
        activeCurrent(index);
    } else {
        index++;
        activeCurrent(index);
    }
};
const prevSlide = () => {
    if (index === 0) {
        index =  slids.length - 1;
        activeCurrent(index);
    } else {
        index--;
        activeCurrent(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeCurrent(index);
    });
    
});
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


const   humburger = document.querySelector('.humburger');
const   menu = document.querySelector('.promo__menu');
const menuList = document.querySelectorAll('.list');

const addActive = act => {
    humburger.classList.toggle(act); 
    menu.classList.toggle(act);
}

humburger.addEventListener('click', () => {
    addActive('active');
});
menuList.forEach(item => {
    item.addEventListener('click', () => {
        addActive('active');
    });
});


