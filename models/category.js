module.exports = (sql, type) => {
  return sql.define('category', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category: type.STRING
  });
}