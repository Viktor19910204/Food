function bindpostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.append(statusMessage);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));


        postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            form.reset();
            setTimeout(() => {
                statusMessage.remove();
            }, 3000);
        })
        .catch(() => {showThanksModal(message.fail);})
        .finally(() => {form.reset();});
        
        // request.setRequestHeader('Content-type', 'application/json');
        


        // request.send(json);

        // request.addEventListener('load', () => {
        //     if (request.status === 200) {
        //         console.log(request.response);
        //         showThanksModal(message.success);
        //         form.reset();
        //         setTimeout(() => {
        //             statusMessage.remove();
        //         }, 3000);
        //     } else {
        //         showThanksModal(message.fail);
        //     }
        // });

    });
}

export default bindpostData;