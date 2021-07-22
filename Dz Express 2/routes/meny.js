const express = require('express');
const path = require('path');
const meny = express.Router();


meny.get('/:id', (req, res) => {
    const { id } = req.params;


    const articles = [
        {id: 'latte', images:'/public/img/Latte.jpg',title: 'Latte', content: 'milk 150 ml, sugar to taste, cinnamon or grated chocolate to taste 50 ml coffee'},

        {id: 'BlackTea', images:'/public/img/blackTea.jpg', title: 'Black Tea', content: 'Black Tea'},

        {id: 'GreanTea', images:'/public/img/greanTea.jpg', title: 'Grean Tea', content: 'Grean Tea'},

        {id: 'Mohito', images:'/public/img/Mohito.jpg', title: 'Mohito', content: 'Fresh mint 10 g, Lime 1/2 piece, Sprite 150 ml, Ice 8 pieces,Cane sugar'},

        {id: 'Sendvich', images:'/public/img/sendvich.jpg',title: 'Sendvich', content: 'Bacon 10 g, White bread 1/2 piece,Edam cheese20 g,Tomatoes 1 piece,    Mayonnaise1 tablespoon,Butter10 g, Chicken egg 1 piece, Lettuce leaves'},

        {id: 'Doner', images:'/public/img/doner.jpg',title: 'Doner', content: 'chicken 300 g,tomato 1-2 pcs.cucumber 1-2 pcs.lavash 2 pcs. parsley 0.5 bunch (a)   dill 0.5 bunch (a) yogurt 150 ml  lettuce 1 bunch (s)  paprika 0.5 tsp  garlic 2 pcs. feta cheese 3 tbsp, hops suneli 1 tsp, salt 1-2 pinch (s)'},

        {id: 'Mazik', images:'/public/img/mazik.jpg', title: 'Mazik', content: 'secret recipe'},
    ]

    const shablonHtml = articles.find(val => val.id === id)
  
    res.render('dishes', {
        title: shablonHtml.title,
        content: shablonHtml.content,
        images: shablonHtml.images,
    })

});

module.exports = meny;
