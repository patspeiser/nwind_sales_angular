const db = require('./_db');

var SalesPerson = db.define('sales_person', {
	name: db.Sequelize.STRING
});

module.exports = SalesPerson;
