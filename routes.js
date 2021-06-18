const { Router } = require('express');
const router = Router();

const productos = 
[
  {
    "id": 1,
    "name": "Pisco Tres Erres 35°",
    "url_image": "https://jumbo.vteximg.com.br/arquivos/ids/321096/Principal-20375.jpg?v=637121359176330000",
    "price": 3900,
    "discount": 1000,
    "category": 1
  },
  {
    "id": 2,
    "name": "Pisco Alto del Carmen 35°",
    "url_image": "https://thedrinks.cl/wp-content/uploads/2020/09/Pisco-Alto-del-Carmen-verde-35%C2%BA-botella-1000cc.jpg",
    "price": 6800,
    "discount": 1000,
    "category": 1
  },
  {
    "id": 3,
    "name": "Pisco Alto del Carmen 40°",
    "url_image": "https://www.elmer.cl/images/pisco/pisco-40-conde-envejecido-alto-750.jpg",
    "price": 5090,
    "discount": 1000,
    "category": 2
  },
  {
    "id": 4,
    "name": "Pisco Artesanos 35°",
    "url_image": "https://jumbo.vteximg.com.br/arquivos/ids/334676/Principal-12177.jpg?v=637229258833500000",
    "price": 3340,
    "discount": 1000,
    "category": 2
  },
  {
    "id": 5,
    "name": "Pisco Bauza 40°",
    "price": 4050,
    "url_image": "http://www.distribuidoralacolina.cl/img/p/9/0/9/909-large_default.jpg",
    "discount": 1000,
    "category": 2
  },
  {
    "id": 6,
    "name": "Pisco Campanario 35 °",
    "url_image": "https://www.comercialescocia.cl/media/catalog/product/cache/1/thumbnail/600x/9df78eab33525d08d6e5fb8d27136e95/6/6/66004200_1.jpg",
    "price": 4000,
    "discount": 1000,
    "category": 1
  },
  {
    "id": 7,
    "name": "Pisco Campanario 40°",
    "url_image": "https://donpala.araucania.online/images/thumbs/0004142_pisco-campanario-coctel-lucuma-colado-12-700-cc_550.jpeg",
    "price": 4300,
    "discount": 1000,
    "category": 2
  },
  {
    "id": 8,
    "name": "Pisco Espiritu del Elqui",
    "url_image": "https://cav.cl/storage/sku_images/20926.jpg",
    "price": 9000,
    "discount": 1000,
    "category": 3
  }
]

router.get('/', function(req, res) {
  res.render('index', {productos:productos});
});

module.exports = router;