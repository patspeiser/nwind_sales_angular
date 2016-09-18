const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
	//logging: false
});

var SalesPerson = db.define('sales_person', {
	name: Sequelize.STRING
})

var Region = db.define('region', {
	zipCode: Sequelize.STRING
});

module.exports = {
	db: db,
	models: {
		SalesPerson: SalesPerson,
		Region: Region
	}
}