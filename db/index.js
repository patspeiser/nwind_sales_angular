const db = require('./_db');
var SalesPerson =  require('./salesPerson');
var Region =  require('./region');

module.exports = {
  sync: function(){
    return db.sync({ force: true });
  },
	models: {
		SalesPerson: SalesPerson,
		Region: Region
	}
};
