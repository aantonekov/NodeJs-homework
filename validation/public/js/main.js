const form = document.forms.form;
const btn = document.querySelector('.btn')
const name = document.querySelector('.name')
const result = document.querySelector('.result')



btn.addEventListener('click', (ev) => {
    ev.preventDefault()
    
    const data = new FormData(form);
    const dataName = data.get('nam');
    const dataSurname = data.get('surname');
    const dataEmail = data.get('email');
    const dataGender = data.get('gender');
    const dataIpAdress = data.get('ipAdress');
   

    const getInfo = {dataName, dataSurname, dataEmail, dataGender, dataIpAdress}
    
    console.log(getInfo);

    axios.post('valid', data)
    .then((r)=> {
        let str = ``;
        r.data.forEach(element => {
            str = `${str}${element.slice(1)}, `
        });
        result.innerHTML = `Ошибка в поле ${str}`
        console.log(r);
    })
    .catch(err => result.innerHTML=err)
    

})