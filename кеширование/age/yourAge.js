const moment = require('moment');


const dateBorn = moment('05/09/2000', 'DD/MM/YYYY');


const fun = () => {
    const now = moment();
    const age = now.diff(dateBorn);
   
    const mom = moment.duration(age).humanize();
    
    if (dateBorn === null || dateBorn === undefined) {
        console.log('дата рождения не установлена !');
    }else {
        console.log('You are', mom);
    };
};


module.exports.dateBorn = dateBorn;
module.exports.fun = fun();



