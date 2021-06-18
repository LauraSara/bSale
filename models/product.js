module.exports = (sql, type) => {
  return sql.define('product', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    url_image: type.STRING,
    price: type.FLOAT,
    discount: type.INTEGER,
    category: type.INTEGER
  });
}