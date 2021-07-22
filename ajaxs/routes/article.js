const express = require('express');
const { title } = require('process');
const router = express.Router();

const articleData = [
    { id: '1', title: 'all information', content: 'It`s all information'},
    { id: '2', title: 'basic  information', content: 'Very inportante information'},
    { id: '3', title: 'additional information', content: 'Additional information'},
]

router.get('/list', (req, res) => {
    const articleList = articleData.map(val => {
        return {id: val.id, title: val.title}
    })

    res.json({
        statust:'ok',
        result: {
            list: articleList
        }
    })
    
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const articleDatas = articleData.find(val =>val.id === id);

    if (!articleDatas) {
        res.json({
            status:'not found'
        });
        return;
    }
    res.json({
        status:'ok',
        result:{ articleDatas }
    });

})

module.exports = router;