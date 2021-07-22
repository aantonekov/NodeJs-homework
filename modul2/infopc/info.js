const { cpus } = require('os');

const cpusName = () => {
    const result = cpus();

    const names = result.map((item) => {
        console.log(item.model);

        return item.model;
    });
    console.log('Name:',names);

    const speed = result.map((item) => {
        console.log(item.speed);

        return item.speed;
    });
    console.log('Speed:',speed);
    
};
cpusName();



module.exports.cpusName = cpusName;


