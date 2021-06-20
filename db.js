const Sequelize = require('sequelize');

//  Conexión a la Base de Datos
/*
const sql = new Sequelize('bsale', 'root', 'laurasarabia', {
  host: 'localhost',
  dialect: 'mysql'
});
*/

const sql = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  dialect: 'mysql'
});


// creacion de las tablas
const Product = sql.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url_image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  discount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Category = sql.define('category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//  sincronizar el código con la base de datos
/*
sql.sync()
  .then(() => {
    console.log('Base de datos y tablas creadas');
  });
*/

Category.hasMany(Product);
Product.belongsTo(Category, { foreignKey: 'categoryId'});



module.exports = {
  Product,
  Category
};