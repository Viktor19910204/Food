function clearDots() {
    dots.forEach(item => {
        item.classList.remove('dot_active');
    })
}

export default clearDots;