const axios = require('axios');


const render =  (req,res) => {
    res.render('main');
};


const run = async(req, res) => {
    const inpId = req.body.id;
    console.log(inpId);

    const idArr = inpId.split(',')
   
    const planetArr = await Promise.all(idArr.map( async (id) => {
        const url = `https://swapi.dev/api/planets/${id}/`;
        const result = await axios.get(url);
        return result.data;
    }));

    res.send({
        planetArr
    })
}

module.exports = {
    render,
    run
};