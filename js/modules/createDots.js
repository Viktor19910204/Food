function createDots () {
    const carouselIndicators = document.createElement('div');
    carouselIndicators.classList.add('carousel-indicators');

    slideBlocks.forEach((item, i) => {
        const dot = document.createElement('div');
        if (i == 0) {
            dot.classList.add('dot', 'dot_active');
        } else {
            dot.classList.add('dot');
        }
        carouselIndicators.append(dot);
        dots.push(dot);
    })
    sliderWrap.append(carouselIndicators);
    
}

export default createDots;