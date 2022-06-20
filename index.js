const span = document.querySelectorAll('span');
const containerLeft = document.querySelector('.container-left');
const btn = document.querySelector('.btn');
const price = document.querySelector('.btn-buy p');
const container = document.querySelector('.container');

span.forEach((select) => {
    select.addEventListener('click', (e) => {
        for(const element of span) {
            element.classList.remove('active');
            containerLeft.classList.remove(element.classList);
            btn.classList.remove(element.classList);
        };
        containerLeft.classList.add(select.classList);
        btn.classList.add(select.classList);

        const testData = select.dataset.color;
        price.style.color = testData;

        container.style.boxShadow = `60px -16px ${select.dataset.color}`

        select.classList.add('active');
        
        //Sans dataset
        // containerLeft.className = `container-left ${e.target.className}`

        //Autre solution avec dataset
        // const testData = select.dataset.color;
        // containerLeft.style.backgroundColor = testData;
        // btn.style.backgroundColor = testData;
        // price.style.color = testData;

    });
});

