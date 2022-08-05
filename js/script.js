import bindpostData from './modules/bindPostData';
import clearActiveTabs from './modules/clearActiveTabs';
import clearDots from './modules/clearDots';
import closeModal from './modules/closeModal';
import createDots from './modules/createDots';
import removeActivity from './modules/removeActivity';
import showModal from './modules/showModal';
import showModalByScroll from './modules/showModalByScroll';

document.addEventListener('DOMContentLoaded', () => {

    const tabheaderWrap = document.querySelector('.tabheader__items'),
          tabheaderItems = tabheaderWrap.querySelectorAll('.tabheader__item'),
          tabcontent = document.querySelectorAll('.tabcontent');

    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds');

    const modal = document.querySelector('.modal'),
          btns = document.querySelectorAll('.btn'),
          close = document.querySelector('.modal__close'),
          body = document.querySelector('body');


    body.addEventListener('click', (e) => {
        if (e.target == close || e.target == modal) {
            closeModal();
        }
        btns.forEach(btn => {
            if (e.target == btn) {
                showModal();
            }
        });

    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape') {
            closeModal();
        }
    });

    // setTimeout(showModal, 5000);

    
    window.addEventListener('scroll', showModalByScroll);

    
          

    
    
    clearActiveTabs(1);
    
    tabheaderWrap.addEventListener('click', (e) => {
        clearActiveTabs(0);
        tabheaderItems.forEach((item, i, arr) => {
            if (e.target == item) {
                item.classList.toggle('tabheader__item_active');
                tabcontent[i].style.display = 'block';
            }
        });
    });

    
    const interval = setInterval(function() {
        let finishDate = new Date(2022, 6, 26),
            nowDate = new Date();
        let milliseconds = finishDate - nowDate;
        let currentSeconds = Math.floor(milliseconds / 1000 % 60);
        let currentMinutes = Math.floor(milliseconds / 1000 / 60 % 60);
        let currentHours = Math.floor(milliseconds / 1000 / 60 / 60 % 24);
        let currentDays = Math.floor(milliseconds / 1000 / 60 / 60 / 24);
        function getZero(n) {
            if (n >= 0 && n < 10) {
                return `0${n}`;
            } else {
                return n;
            }
        };
        if (milliseconds < 0) {
            clearInterval(interval);
        }

        days.innerHTML = getZero(currentDays);
        hours.innerHTML = getZero(currentHours);
        minutes.innerHTML = getZero(currentMinutes);
        seconds.innerHTML = getZero(currentSeconds);
    }, 1000);
    
    const getResource = async (url) => {
        const resp = axios.get(url);

        return resp;
    };

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                let newItem = new MenuItem(img, title, descr, price, valute='rub');
                newItem.createItem();
                newItem.appendItem();
            })
        })

    class MenuItem {
        constructor(src, subtitle, descr, price, valute) {
            this.src = src;
            this.subtitle = subtitle;
            this.descr = descr;
            this.price = price;
            this.valute = valute;
        }

        createItem() {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu__item');
            menuItem.innerHTML = `
            <img src=${this.src} alt="vegy">
            <h3 class="menu__item-subtitle">${this.subtitle}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> ${this.valute}</div>
            </div>`;
            return menuItem;
        }
        appendItem() {
            const menuField = document.querySelector('.menu__field'),
                  menuContainer = menuField.querySelector('.container');

            menuContainer.append(this.createItem());
        }
    }


        
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/spiner/spinner.svg',
        success: 'Спасибо',
        fail: 'Ошибка'
    };

    forms.forEach(item => {
        bindpostData(item);
    });

    const postData = async (url, data) => {
        return await axios.post(url, data);  
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
    
        prevModalDialog.style.display = 'none';
        modal.style.display = 'block';
    
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div class='modal__close' data-close>×</div>
                <div class='modal__title'>${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.style.display = 'block';
            modal.style.display = 'none';
        }, 4000);
    }
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

    
    

    // Slider 1

    // const sliderCounter = document.querySelector('.offer__slider-counter'),
    //       sliderPrev = sliderCounter.querySelector('.offer__slider-prev'),
    //       sliderNext = sliderCounter.querySelector('.offer__slider-next'),
    //       sliderCurrent = sliderCounter.querySelector('#current'),
    //       sliderTotal = sliderCounter.querySelector('#total'),
    //       slideBlocks = document.querySelectorAll('.offer__slide');
    
    // sliderTotal.textContent = '0' + slideBlocks.length;      
    // function hideSlides(count) {
    //     for (let i = count; i < slideBlocks.length; i++) {
    //         slideBlocks[i].querySelector('img').style.width = 0 + '%';
    //         slideBlocks[i].style.display = 'none';
    //     }
    // }
    // hideSlides(1);

    // sliderNext.addEventListener('click', (e) => {
    //     let width = 100;
    //     const hideSlide = setInterval(function() {
    //         width -= 5;
    //         slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';
    //         if (width === 0) {
    //             clearInterval(hideSlide);
    //             slideBlocks[+sliderCurrent.textContent - 1].style.display = 'none';
    //             if (+sliderCurrent.textContent === slideBlocks.length) {
    //                 sliderCurrent.textContent = '00';
    //             }
    //             slideBlocks[+sliderCurrent.textContent].style.display = 'block';
    //             sliderCurrent.textContent = '0' + (+sliderCurrent.textContent + 1);
    //             const showSlide = setInterval(function() {
    //                 width += 5;
    //                 slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';
    //                 if (width === 100) {
    //                     clearInterval(showSlide);
    //                 }
    //             }, 5)
    //         }
    //     }, 5);

    // })

    // sliderPrev.addEventListener('click', (e) => {
    //     let width = 100;
    //     const hideSlide = setInterval(function() {
    //         width -= 5;
    //         slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';
    //         if (width === 0) {
    //             clearInterval(hideSlide);
    //             slideBlocks[+sliderCurrent.textContent - 1].style.display = 'none';
    //             if (+sliderCurrent.textContent === 1) {
    //                 sliderCurrent.textContent = '' + (slideBlocks.length + 1);
    //             }
    //             slideBlocks[+sliderCurrent.textContent - 2].style.display = 'block';
    //             sliderCurrent.textContent = '0' + (+sliderCurrent.textContent - 1);
    //             const showSlide = setInterval(function() {
    //                 width += 5;
    //                 slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';
    //                 if (width === 100) {
    //                     clearInterval(showSlide);
    //                 }
    //             },5)
    //         }
    //     }, 5);

    // })

    // Slider 2

    const sliderCounter = document.querySelector('.offer__slider-counter'),
          sliderPrev = sliderCounter.querySelector('.offer__slider-prev'),
          sliderNext = sliderCounter.querySelector('.offer__slider-next'),
          sliderCurrent = sliderCounter.querySelector('#current'),
          sliderTotal = sliderCounter.querySelector('#total'),
          slideBlocks = document.querySelectorAll('.offer__slide'),
          sliderWrap = document.querySelector('.offer__slider-wrapper'),
          sliderInner = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(sliderWrap).width,
          allWidth = 100 * slideBlocks.length + '%',
          dots = [],
          wrap = document.querySelector('.offer__slider');

    createDots();
    

    let offset = 0;
    let counter = 1;

    slideBlocks.forEach(item => {
        item.style.width = width + 'px';
        item.style.transition = '.5 all';
    })

    sliderInner.style.display = 'flex';
    sliderInner.style.width = allWidth;
    sliderWrap.style.overflow = 'hidden';
    sliderInner.style.transition = '.5s all';
    sliderWrap.style.transition = '.5s all';
    if (slideBlocks.length > 9) {
        sliderTotal.textContent = `${slideBlocks.length}`;
    } else {
        sliderTotal.textContent = `0${slideBlocks.length}`;
    }



    sliderNext.addEventListener('click', () => {
        offset += +width.slice(0, width.length - 2);
        if (offset === slideBlocks.length * +width.slice(0, width.length -2)) {
            offset = 0;
        }
        sliderInner.style.transform = `translateX(${-offset}px)`;
        counter += 1;
        if (counter > slideBlocks.length) {
            counter = 1;
        }
        if (counter > 9) {
            sliderCurrent.textContent = `${counter}`;
        } else {
            sliderCurrent.textContent = `0${counter}`;
        }
        clearDots();
        dots[counter - 1].classList.add('dot_active');
    })
    sliderPrev.addEventListener('click', () => {
        offset -= +width.slice(0, width.length - 2);
        if (offset < 0) {
            offset = (slideBlocks.length - 1) * +width.slice(0, width.length -2);
        }
        sliderInner.style.transform = `translateX(${-offset}px)`;
        counter -= 1;
        if (counter < 1) {
            counter = +sliderTotal.textContent;
        }
        if (counter > 9) {
            sliderCurrent.textContent = `${counter}`;
        } else {
            sliderCurrent.textContent = `0${counter}`;
        }
        clearDots();
        dots[counter - 1].classList.add('dot_active');
    })

    sliderWrap.addEventListener('click', (e) => {
        dots.forEach((item, i) => {
            if(e.target == item) {
                clearDots();
                item.classList.add('dot_active');
                offset = +width.slice(0, width.length - 2) * i;
                sliderInner.style.transform = `translateX(${-offset}px)`;
                counter = i + 1;
                if (counter > 9) {
                    sliderCurrent.textContent = `${counter}`;
                } else {
                    sliderCurrent.textContent = `0${counter}`;
                }
            }
        })
    })

    // Calculator

    const calculatorField = document.querySelector('.calculating__field'),
          chooseGender = document.querySelectorAll('#gender .calculating__choose-item'),
          parametres = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item'),
          activity = document.querySelectorAll('.calculating__choose_big .calculating__choose-item'),
          result = document.querySelector('.calculating__result span');

    result.textContent = '____';

    let activityValue = 1.375,
        count = 0;

    

    chooseGender[0].addEventListener('click', (e) => {
        removeActivity(chooseGender, 0);
        chooseGender[0].classList.toggle('calculating__choose-item_active');
        count = 0;
        result.textContent = Math.round((447.6 + (3.1 * parametres[1].value) + (9.2 * parametres[0].value) - (4.3 * parametres[2].value)) * activityValue);
    })

    chooseGender[1].addEventListener('click', (e) => {
        removeActivity(chooseGender, 0);
        chooseGender[1].classList.toggle('calculating__choose-item_active');
        count = 1;
        result.textContent = Math.round((88.36 + (4.8 * parametres[1].value) + (13.4 * parametres[0].value) - (5.7 * parametres[2].value)) * activityValue);
    })

    calculatorField.addEventListener('click', (e) => {
        activity.forEach(item => {
            if (e.target === item) {
                removeActivity(activity, 0);
                item.classList.toggle('calculating__choose-item_active');
                if (item.textContent === 'Низкая активность') {
                    activityValue = 1.2;
                } else if (item.textContent === 'Невысокая активность') {
                    activityValue = 1.375;
                } else if (item.textContent === 'Умеренная активность') {
                    activityValue = 1.55;
                } else if (item.textContent === 'Высокая активность') {
                    activityValue = 1.725;
                }
            }
        })
        if (count === 0) {
            result.textContent = Math.round((447.6 + (3.1 * parametres[1].value) + (9.2 * parametres[0].value) - (4.3 * parametres[2].value)) * activityValue);
        } else {
            result.textContent = Math.round((88.36 + (4.8 * parametres[1].value) + (13.4 * parametres[0].value) - (5.7 * parametres[2].value)) * activityValue);
        }
    })

    
});

