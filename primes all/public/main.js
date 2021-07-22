const form = document.forms.form;
const result = document.querySelector('.result')
console.log("gav");
form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const data = new FormData(form);

    axios.post('/form', data)
        .then(rer => {
            let str = ''
            const planetArr = rer.data.planetArr
            planetArr.forEach(el => {
                str = `${str}
                <div> ${el.name} ${el.diameter} ${el.terrain}</div>`

            });
            console.log(rer.data);
            result.innerHTML = str;

        })
        .catch(err => result.innerHTML= err)
    
})