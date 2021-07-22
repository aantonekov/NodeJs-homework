const axios = require('axios');


 setInterval( async() => {

    const url ='https://api.openweathermap.org/data/2.5/weather?q=Kyiv&lang=ru&units=metric&appid=0777e1dfc69720ef712334e84d612d38';
    
    const dat = await axios.get(url);
    console.log(dat);

    
    // const temp = dat.data.main.temp;
    // const city = dat.data.name;
    // console.log('Город: ',city);
    // console.log('Температура: ', temp,'C°');
    

},6000)






