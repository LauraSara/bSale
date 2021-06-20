const { Router } = require('express');
const router = Router();
const { Product } = require('./db');
const { Category } = require('./db');
const { Op } = require("sequelize");


router.get('/', async function (req, res) {
  const productosDb = await Product.findAll({
    include: [Category]
  });

  const categoryDb = await Category.findAll({
    include: [Product]
  });

  res.render('index', { productos: productosDb, Category: categoryDb });
});

router.get("/categoriaAlcohol", async (req, res) => {

  const { count, rows } = await Category.findAndCountAll({
    include:[{model: Product}],
    distinct: true,
    where: {
      name: {
        [Op.like]: `%Alcohol%`
      }
    }
  });
  var jsonDB = JSON.parse(JSON.stringify(rows))


  res.render('index', { productos: jsonDB[0].products});
});

router.get("/categoriaAlimentos", async (req, res) => {

  const { count, rows } = await Category.findAndCountAll({
    include:[{model: Product}],
    distinct: true,
    where: {
      name: {
        [Op.like]: `%Alimentos%`
      }
    }
  });
  var jsonDB = JSON.parse(JSON.stringify(rows))

  res.render('index', { productos: jsonDB[0].products});
});

router.post("/product",  async (req, res) => {
  if(req.body.name == "" || req.body.price == ""){
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
    return res.send("Error name category");
  }
  let category = await Category.create({    
    name: req.body.name
  });		
  res.status(200).json(`Category ${category.name} created`);
});


router.post("/filter-product", async (req, res) => {
  console.log("dentro de filter")

  let filter = req.body.filter

  const { count, rows } = await Product.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${filter}%`
      }
    }
  });

  res.render('index', { productos: rows});
});



module.exports = router;
