function clearActiveTabs(n) {
    for (let i = n; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
        tabheaderItems[i].classList.remove('tabheader__item_active');
    }
}

export default clearActiveTabs;