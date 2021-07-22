const yourAge = require('./yourAge.js');
const process = require('process');

const time = setInterval(()=> {
    console.log('- 10 секунд твоей жизни ');
},10000);


if (yourAge.dateBorn === null || yourAge.dateBorn === undefined) {
    console.log('Отсчет жизни не начат');
    process.exit(time)
}else {
    
};