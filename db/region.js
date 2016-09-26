const db = require('./_db');

var Region = db.define('region', {
	zipCode: db.Sequelize.STRING
});

module.exports = Region;
