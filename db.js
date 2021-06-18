const Sequelize = require('sequelize');

// acá creamos la conexión a la Base de Datos
const sql = new Sequelize('bsale', 'root', 'laurasarabia', {
  host: 'localhost',
  dialect: 'mysql'
});

// acá creamos las tablas
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
  category: {
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

//  después sincronizamos nuestro código con la base de datos
sql.sync()
.then(() => {
  console.log('Base de datos y tablas creadas');
});


// finalmente acá listamos todos los modelos que queremos exportar
module.exports = {
  Product,
  Category
};