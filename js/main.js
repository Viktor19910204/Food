/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/bindPostData.js":
/*!************************************!*\
  !*** ./js/modules/bindPostData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction bindpostData(form) {\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        const statusMessage = document.createElement('img');\r\n        statusMessage.src = message.loading;\r\n        statusMessage.style.cssText = `\r\n            display: block;\r\n            margin: 0 auto;\r\n        `;\r\n        form.append(statusMessage);\r\n\r\n        const formData = new FormData(form);\r\n\r\n        const json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n\r\n\r\n        postData('http://localhost:3000/requests', json)\r\n        .then(data => {\r\n            console.log(data);\r\n            showThanksModal(message.success);\r\n            form.reset();\r\n            setTimeout(() => {\r\n                statusMessage.remove();\r\n            }, 3000);\r\n        })\r\n        .catch(() => {showThanksModal(message.fail);})\r\n        .finally(() => {form.reset();});\r\n        \r\n        // request.setRequestHeader('Content-type', 'application/json');\r\n        \r\n\r\n\r\n        // request.send(json);\r\n\r\n        // request.addEventListener('load', () => {\r\n        //     if (request.status === 200) {\r\n        //         console.log(request.response);\r\n        //         showThanksModal(message.success);\r\n        //         form.reset();\r\n        //         setTimeout(() => {\r\n        //             statusMessage.remove();\r\n        //         }, 3000);\r\n        //     } else {\r\n        //         showThanksModal(message.fail);\r\n        //     }\r\n        // });\r\n\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindpostData);\n\n//# sourceURL=webpack://food/./js/modules/bindPostData.js?");

/***/ }),

/***/ "./js/modules/clearActiveTabs.js":
/*!***************************************!*\
  !*** ./js/modules/clearActiveTabs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction clearActiveTabs(n) {\r\n    for (let i = n; i < tabcontent.length; i++) {\r\n        tabcontent[i].style.display = 'none';\r\n        tabheaderItems[i].classList.remove('tabheader__item_active');\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearActiveTabs);\n\n//# sourceURL=webpack://food/./js/modules/clearActiveTabs.js?");

/***/ }),

/***/ "./js/modules/clearDots.js":
/*!*********************************!*\
  !*** ./js/modules/clearDots.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction clearDots() {\r\n    dots.forEach(item => {\r\n        item.classList.remove('dot_active');\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearDots);\n\n//# sourceURL=webpack://food/./js/modules/clearDots.js?");

/***/ }),

/***/ "./js/modules/closeModal.js":
/*!**********************************!*\
  !*** ./js/modules/closeModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction closeModal() {\r\n    modal.style.display = 'none';\r\n    body.style.overflow = 'auto';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeModal);\n\n//# sourceURL=webpack://food/./js/modules/closeModal.js?");

/***/ }),

/***/ "./js/modules/createDots.js":
/*!**********************************!*\
  !*** ./js/modules/createDots.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDots () {\r\n    const carouselIndicators = document.createElement('div');\r\n    carouselIndicators.classList.add('carousel-indicators');\r\n\r\n    slideBlocks.forEach((item, i) => {\r\n        const dot = document.createElement('div');\r\n        if (i == 0) {\r\n            dot.classList.add('dot', 'dot_active');\r\n        } else {\r\n            dot.classList.add('dot');\r\n        }\r\n        carouselIndicators.append(dot);\r\n        dots.push(dot);\r\n    })\r\n    sliderWrap.append(carouselIndicators);\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDots);\n\n//# sourceURL=webpack://food/./js/modules/createDots.js?");

/***/ }),

/***/ "./js/modules/removeActivity.js":
/*!**************************************!*\
  !*** ./js/modules/removeActivity.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction removeActivity(arr, n) {\r\n    arr.forEach(item => {\r\n        item.classList.remove('calculating__choose-item_active');\r\n    })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeActivity);\n\n//# sourceURL=webpack://food/./js/modules/removeActivity.js?");

/***/ }),

/***/ "./js/modules/showModal.js":
/*!*********************************!*\
  !*** ./js/modules/showModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showModal() {\r\n    modal.style.display = 'block';\r\n    body.style.overflow = 'hidden';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);\n\n//# sourceURL=webpack://food/./js/modules/showModal.js?");

/***/ }),

/***/ "./js/modules/showModalByScroll.js":
/*!*****************************************!*\
  !*** ./js/modules/showModalByScroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showModalByScroll() {\r\n    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {\r\n        showModal();\r\n        window.removeEventListener('scroll', showModalByScroll);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModalByScroll);\n\n//# sourceURL=webpack://food/./js/modules/showModalByScroll.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_bindPostData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bindPostData */ \"./js/modules/bindPostData.js\");\n/* harmony import */ var _modules_clearActiveTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clearActiveTabs */ \"./js/modules/clearActiveTabs.js\");\n/* harmony import */ var _modules_clearDots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clearDots */ \"./js/modules/clearDots.js\");\n/* harmony import */ var _modules_closeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/closeModal */ \"./js/modules/closeModal.js\");\n/* harmony import */ var _modules_createDots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createDots */ \"./js/modules/createDots.js\");\n/* harmony import */ var _modules_removeActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/removeActivity */ \"./js/modules/removeActivity.js\");\n/* harmony import */ var _modules_showModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showModal */ \"./js/modules/showModal.js\");\n/* harmony import */ var _modules_showModalByScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/showModalByScroll */ \"./js/modules/showModalByScroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    const tabheaderWrap = document.querySelector('.tabheader__items'),\r\n          tabheaderItems = tabheaderWrap.querySelectorAll('.tabheader__item'),\r\n          tabcontent = document.querySelectorAll('.tabcontent');\r\n\r\n    const days = document.querySelector('#days'),\r\n          hours = document.querySelector('#hours'),\r\n          minutes = document.querySelector('#minutes'),\r\n          seconds = document.querySelector('#seconds');\r\n\r\n    const modal = document.querySelector('.modal'),\r\n          btns = document.querySelectorAll('.btn'),\r\n          close = document.querySelector('.modal__close'),\r\n          body = document.querySelector('body');\r\n\r\n\r\n    body.addEventListener('click', (e) => {\r\n        if (e.target == close || e.target == modal) {\r\n            (0,_modules_closeModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n        }\r\n        btns.forEach(btn => {\r\n            if (e.target == btn) {\r\n                (0,_modules_showModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n            }\r\n        });\r\n\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code == 'Escape') {\r\n            (0,_modules_closeModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n        }\r\n    });\r\n\r\n    // setTimeout(showModal, 5000);\r\n\r\n    \r\n    window.addEventListener('scroll', _modules_showModalByScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n\r\n    \r\n          \r\n\r\n    \r\n    \r\n    (0,_modules_clearActiveTabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1);\r\n    \r\n    tabheaderWrap.addEventListener('click', (e) => {\r\n        (0,_modules_clearActiveTabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0);\r\n        tabheaderItems.forEach((item, i, arr) => {\r\n            if (e.target == item) {\r\n                item.classList.toggle('tabheader__item_active');\r\n                tabcontent[i].style.display = 'block';\r\n            }\r\n        });\r\n    });\r\n\r\n    \r\n    const interval = setInterval(function() {\r\n        let finishDate = new Date(2022, 6, 26),\r\n            nowDate = new Date();\r\n        let milliseconds = finishDate - nowDate;\r\n        let currentSeconds = Math.floor(milliseconds / 1000 % 60);\r\n        let currentMinutes = Math.floor(milliseconds / 1000 / 60 % 60);\r\n        let currentHours = Math.floor(milliseconds / 1000 / 60 / 60 % 24);\r\n        let currentDays = Math.floor(milliseconds / 1000 / 60 / 60 / 24);\r\n        function getZero(n) {\r\n            if (n >= 0 && n < 10) {\r\n                return `0${n}`;\r\n            } else {\r\n                return n;\r\n            }\r\n        };\r\n        if (milliseconds < 0) {\r\n            clearInterval(interval);\r\n        }\r\n\r\n        days.innerHTML = getZero(currentDays);\r\n        hours.innerHTML = getZero(currentHours);\r\n        minutes.innerHTML = getZero(currentMinutes);\r\n        seconds.innerHTML = getZero(currentSeconds);\r\n    }, 1000);\r\n    \r\n    const getResource = async (url) => {\r\n        const resp = axios.get(url);\r\n\r\n        return resp;\r\n    };\r\n\r\n    getResource('http://localhost:3000/menu')\r\n        .then(data => {\r\n            data.data.forEach(({img, altimg, title, descr, price}) => {\r\n                let newItem = new MenuItem(img, title, descr, price, valute='rub');\r\n                newItem.createItem();\r\n                newItem.appendItem();\r\n            })\r\n        })\r\n\r\n    class MenuItem {\r\n        constructor(src, subtitle, descr, price, valute) {\r\n            this.src = src;\r\n            this.subtitle = subtitle;\r\n            this.descr = descr;\r\n            this.price = price;\r\n            this.valute = valute;\r\n        }\r\n\r\n        createItem() {\r\n            const menuItem = document.createElement('div');\r\n            menuItem.classList.add('menu__item');\r\n            menuItem.innerHTML = `\r\n            <img src=${this.src} alt=\"vegy\">\r\n            <h3 class=\"menu__item-subtitle\">${this.subtitle}</h3>\r\n            <div class=\"menu__item-descr\">${this.descr}</div>\r\n            <div class=\"menu__item-divider\"></div>\r\n            <div class=\"menu__item-price\">\r\n                <div class=\"menu__item-cost\">Цена:</div>\r\n                <div class=\"menu__item-total\"><span>${this.price}</span> ${this.valute}</div>\r\n            </div>`;\r\n            return menuItem;\r\n        }\r\n        appendItem() {\r\n            const menuField = document.querySelector('.menu__field'),\r\n                  menuContainer = menuField.querySelector('.container');\r\n\r\n            menuContainer.append(this.createItem());\r\n        }\r\n    }\r\n\r\n\r\n        \r\n    const forms = document.querySelectorAll('form');\r\n\r\n    const message = {\r\n        loading: 'img/spiner/spinner.svg',\r\n        success: 'Спасибо',\r\n        fail: 'Ошибка'\r\n    };\r\n\r\n    forms.forEach(item => {\r\n        (0,_modules_bindPostData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\r\n    });\r\n\r\n    const postData = async (url, data) => {\r\n        return await axios.post(url, data);  \r\n    }\r\n\r\n    function showThanksModal(message) {\r\n        const prevModalDialog = document.querySelector('.modal__dialog');\r\n    \r\n        prevModalDialog.style.display = 'none';\r\n        modal.style.display = 'block';\r\n    \r\n        const thanksModal = document.createElement('div');\r\n        thanksModal.classList.add('modal__dialog');\r\n        thanksModal.innerHTML = `\r\n            <div class='modal__content'>\r\n                <div class='modal__close' data-close>×</div>\r\n                <div class='modal__title'>${message}</div>\r\n            </div>\r\n        `;\r\n        document.querySelector('.modal').append(thanksModal);\r\n        setTimeout(() => {\r\n            thanksModal.remove();\r\n            prevModalDialog.style.display = 'block';\r\n            modal.style.display = 'none';\r\n        }, 4000);\r\n    }\r\n    fetch('http://localhost:3000/menu')\r\n        .then(data => data.json())\r\n        .then(res => console.log(res));\r\n\r\n    \r\n    \r\n\r\n    // Slider 1\r\n\r\n    // const sliderCounter = document.querySelector('.offer__slider-counter'),\r\n    //       sliderPrev = sliderCounter.querySelector('.offer__slider-prev'),\r\n    //       sliderNext = sliderCounter.querySelector('.offer__slider-next'),\r\n    //       sliderCurrent = sliderCounter.querySelector('#current'),\r\n    //       sliderTotal = sliderCounter.querySelector('#total'),\r\n    //       slideBlocks = document.querySelectorAll('.offer__slide');\r\n    \r\n    // sliderTotal.textContent = '0' + slideBlocks.length;      \r\n    // function hideSlides(count) {\r\n    //     for (let i = count; i < slideBlocks.length; i++) {\r\n    //         slideBlocks[i].querySelector('img').style.width = 0 + '%';\r\n    //         slideBlocks[i].style.display = 'none';\r\n    //     }\r\n    // }\r\n    // hideSlides(1);\r\n\r\n    // sliderNext.addEventListener('click', (e) => {\r\n    //     let width = 100;\r\n    //     const hideSlide = setInterval(function() {\r\n    //         width -= 5;\r\n    //         slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';\r\n    //         if (width === 0) {\r\n    //             clearInterval(hideSlide);\r\n    //             slideBlocks[+sliderCurrent.textContent - 1].style.display = 'none';\r\n    //             if (+sliderCurrent.textContent === slideBlocks.length) {\r\n    //                 sliderCurrent.textContent = '00';\r\n    //             }\r\n    //             slideBlocks[+sliderCurrent.textContent].style.display = 'block';\r\n    //             sliderCurrent.textContent = '0' + (+sliderCurrent.textContent + 1);\r\n    //             const showSlide = setInterval(function() {\r\n    //                 width += 5;\r\n    //                 slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';\r\n    //                 if (width === 100) {\r\n    //                     clearInterval(showSlide);\r\n    //                 }\r\n    //             }, 5)\r\n    //         }\r\n    //     }, 5);\r\n\r\n    // })\r\n\r\n    // sliderPrev.addEventListener('click', (e) => {\r\n    //     let width = 100;\r\n    //     const hideSlide = setInterval(function() {\r\n    //         width -= 5;\r\n    //         slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';\r\n    //         if (width === 0) {\r\n    //             clearInterval(hideSlide);\r\n    //             slideBlocks[+sliderCurrent.textContent - 1].style.display = 'none';\r\n    //             if (+sliderCurrent.textContent === 1) {\r\n    //                 sliderCurrent.textContent = '' + (slideBlocks.length + 1);\r\n    //             }\r\n    //             slideBlocks[+sliderCurrent.textContent - 2].style.display = 'block';\r\n    //             sliderCurrent.textContent = '0' + (+sliderCurrent.textContent - 1);\r\n    //             const showSlide = setInterval(function() {\r\n    //                 width += 5;\r\n    //                 slideBlocks[+sliderCurrent.textContent - 1].querySelector('img').style.width = width + '%';\r\n    //                 if (width === 100) {\r\n    //                     clearInterval(showSlide);\r\n    //                 }\r\n    //             },5)\r\n    //         }\r\n    //     }, 5);\r\n\r\n    // })\r\n\r\n    // Slider 2\r\n\r\n    const sliderCounter = document.querySelector('.offer__slider-counter'),\r\n          sliderPrev = sliderCounter.querySelector('.offer__slider-prev'),\r\n          sliderNext = sliderCounter.querySelector('.offer__slider-next'),\r\n          sliderCurrent = sliderCounter.querySelector('#current'),\r\n          sliderTotal = sliderCounter.querySelector('#total'),\r\n          slideBlocks = document.querySelectorAll('.offer__slide'),\r\n          sliderWrap = document.querySelector('.offer__slider-wrapper'),\r\n          sliderInner = document.querySelector('.offer__slider-inner'),\r\n          width = window.getComputedStyle(sliderWrap).width,\r\n          allWidth = 100 * slideBlocks.length + '%',\r\n          dots = [],\r\n          wrap = document.querySelector('.offer__slider');\r\n\r\n    (0,_modules_createDots__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    \r\n\r\n    let offset = 0;\r\n    let counter = 1;\r\n\r\n    slideBlocks.forEach(item => {\r\n        item.style.width = width + 'px';\r\n        item.style.transition = '.5 all';\r\n    })\r\n\r\n    sliderInner.style.display = 'flex';\r\n    sliderInner.style.width = allWidth;\r\n    sliderWrap.style.overflow = 'hidden';\r\n    sliderInner.style.transition = '.5s all';\r\n    sliderWrap.style.transition = '.5s all';\r\n    if (slideBlocks.length > 9) {\r\n        sliderTotal.textContent = `${slideBlocks.length}`;\r\n    } else {\r\n        sliderTotal.textContent = `0${slideBlocks.length}`;\r\n    }\r\n\r\n\r\n\r\n    sliderNext.addEventListener('click', () => {\r\n        offset += +width.slice(0, width.length - 2);\r\n        if (offset === slideBlocks.length * +width.slice(0, width.length -2)) {\r\n            offset = 0;\r\n        }\r\n        sliderInner.style.transform = `translateX(${-offset}px)`;\r\n        counter += 1;\r\n        if (counter > slideBlocks.length) {\r\n            counter = 1;\r\n        }\r\n        if (counter > 9) {\r\n            sliderCurrent.textContent = `${counter}`;\r\n        } else {\r\n            sliderCurrent.textContent = `0${counter}`;\r\n        }\r\n        (0,_modules_clearDots__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        dots[counter - 1].classList.add('dot_active');\r\n    })\r\n    sliderPrev.addEventListener('click', () => {\r\n        offset -= +width.slice(0, width.length - 2);\r\n        if (offset < 0) {\r\n            offset = (slideBlocks.length - 1) * +width.slice(0, width.length -2);\r\n        }\r\n        sliderInner.style.transform = `translateX(${-offset}px)`;\r\n        counter -= 1;\r\n        if (counter < 1) {\r\n            counter = +sliderTotal.textContent;\r\n        }\r\n        if (counter > 9) {\r\n            sliderCurrent.textContent = `${counter}`;\r\n        } else {\r\n            sliderCurrent.textContent = `0${counter}`;\r\n        }\r\n        (0,_modules_clearDots__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        dots[counter - 1].classList.add('dot_active');\r\n    })\r\n\r\n    sliderWrap.addEventListener('click', (e) => {\r\n        dots.forEach((item, i) => {\r\n            if(e.target == item) {\r\n                (0,_modules_clearDots__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n                item.classList.add('dot_active');\r\n                offset = +width.slice(0, width.length - 2) * i;\r\n                sliderInner.style.transform = `translateX(${-offset}px)`;\r\n                counter = i + 1;\r\n                if (counter > 9) {\r\n                    sliderCurrent.textContent = `${counter}`;\r\n                } else {\r\n                    sliderCurrent.textContent = `0${counter}`;\r\n                }\r\n            }\r\n        })\r\n    })\r\n\r\n    // Calculator\r\n\r\n    const calculatorField = document.querySelector('.calculating__field'),\r\n          chooseGender = document.querySelectorAll('#gender .calculating__choose-item'),\r\n          parametres = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item'),\r\n          activity = document.querySelectorAll('.calculating__choose_big .calculating__choose-item'),\r\n          result = document.querySelector('.calculating__result span');\r\n\r\n    result.textContent = '____';\r\n\r\n    let activityValue = 1.375,\r\n        count = 0;\r\n\r\n    \r\n\r\n    chooseGender[0].addEventListener('click', (e) => {\r\n        (0,_modules_removeActivity__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(chooseGender, 0);\r\n        chooseGender[0].classList.toggle('calculating__choose-item_active');\r\n        count = 0;\r\n        result.textContent = Math.round((447.6 + (3.1 * parametres[1].value) + (9.2 * parametres[0].value) - (4.3 * parametres[2].value)) * activityValue);\r\n    })\r\n\r\n    chooseGender[1].addEventListener('click', (e) => {\r\n        ;(0,_modules_removeActivity__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(chooseGender, 0);\r\n        chooseGender[1].classList.toggle('calculating__choose-item_active');\r\n        count = 1;\r\n        result.textContent = Math.round((88.36 + (4.8 * parametres[1].value) + (13.4 * parametres[0].value) - (5.7 * parametres[2].value)) * activityValue);\r\n    })\r\n\r\n    calculatorField.addEventListener('click', (e) => {\r\n        activity.forEach(item => {\r\n            if (e.target === item) {\r\n                (0,_modules_removeActivity__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(activity, 0);\r\n                item.classList.toggle('calculating__choose-item_active');\r\n                if (item.textContent === 'Низкая активность') {\r\n                    activityValue = 1.2;\r\n                } else if (item.textContent === 'Невысокая активность') {\r\n                    activityValue = 1.375;\r\n                } else if (item.textContent === 'Умеренная активность') {\r\n                    activityValue = 1.55;\r\n                } else if (item.textContent === 'Высокая активность') {\r\n                    activityValue = 1.725;\r\n                }\r\n            }\r\n        })\r\n        if (count === 0) {\r\n            result.textContent = Math.round((447.6 + (3.1 * parametres[1].value) + (9.2 * parametres[0].value) - (4.3 * parametres[2].value)) * activityValue);\r\n        } else {\r\n            result.textContent = Math.round((88.36 + (4.8 * parametres[1].value) + (13.4 * parametres[0].value) - (5.7 * parametres[2].value)) * activityValue);\r\n        }\r\n    })\r\n\r\n    \r\n});\r\n\r\n\n\n//# sourceURL=webpack://food/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;