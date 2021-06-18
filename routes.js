const { Router } = require('express');
const router = Router();
const {Product} = require('./db')
const {Category} = require('./db')



const productos = 
[
  {
    "name": "Pisco Tres Erres 35°",
    "url_image": "https://jumbo.vteximg.com.br/arquivos/ids/321096/Principal-20375.jpg?v=637121359176330000",
    "price": 3900,
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Pisco Alto del Carmen 35°",
    "url_image": "https://thedrinks.cl/wp-content/uploads/2020/09/Pisco-Alto-del-Carmen-verde-35%C2%BA-botella-1000cc.jpg",
    "price": 6800,
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Pisco Alto del Carmen 40°",
    "url_image": "https://www.elmer.cl/images/pisco/pisco-40-conde-envejecido-alto-750.jpg",
    "price": 5090,
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Pisco Artesanos 35°",
    "url_image": "https://jumbo.vteximg.com.br/arquivos/ids/334676/Principal-12177.jpg?v=637229258833500000",
    "price": 3340,
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Pisco Bauza 40°",
    "price": 4050,
    "url_image": "http://www.distribuidoralacolina.cl/img/p/9/0/9/909-large_default.jpg",
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Pisco Campanario 35 °",
    "url_image": "https://www.comercialescocia.cl/media/catalog/product/cache/1/thumbnail/600x/9df78eab33525d08d6e5fb8d27136e95/6/6/66004200_1.jpg",
    "price": 4000,
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Pisco Campanario 40°",
    "url_image": "https://donpala.araucania.online/images/thumbs/0004142_pisco-campanario-coctel-lucuma-colado-12-700-cc_550.jpeg",
    "price": 4300,
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Pisco Espiritu del Elqui",
    "url_image": "https://cav.cl/storage/sku_images/20926.jpg",
    "price": 9000,
    "discount": 1000,
    categoryId: 1
  },
  {
    "name": "Papas Fritas Marco Polo",
    "url_image": "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20330409-J6K5Mir7.jpg",
    "price": 2000,
    "discount": 200,
    categoryId: 2
  },
  {
    "name": "Ramitas Evercripts",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/38010/product/ramitasoriginalevercrip1268.jpg",
    "price": 2200,
    "discount": 200,
    categoryId: 2
  }
]

router.get('/', async function(req, res) {
  /*
  Category.create({
    name: 'Alcohol',
  });
  Category.create({
    name: 'Alimentos',
  });
  productos.forEach(p => {
    Product.create(p);
  });
  */
  
  const productosDb = await Product.findAll({
    include: [Category]
  });

  const categoryDb = await Category.findAll({
    include: [Product]
  });

  console.log(productosDb);

  res.render('index', {productos:productosDb , Category: categoryDb});
});

/*
router.post("/product",  async (req, res) => { 
  if(req.body.name=="" || req.body.price==""){
    return res.send("Error");
  }
	let product = await Product.create({    
    name: req.body.name,
    url_image: req.body.url_image,
    price: req.body.price,
    discount: req.body.discount,
    categoryId: req.body.categoryId

  });		
	res.status(200).json(`Product ${product.name} created`);
});



router.post("/category",  async (req, res) => { 
  if(req.body.name==""){
    return res.send("Error");
  }
	let category = await Category.create({    
    name: req.body.name
  });		
	res.status(200).json(`Category ${category.name} created`);
});

*/
module.exports = router;