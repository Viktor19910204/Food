function removeActivity(arr, n) {
    arr.forEach(item => {
        item.classList.remove('calculating__choose-item_active');
    })
};

export default removeActivity;