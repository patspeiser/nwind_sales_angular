const router = require('express').Router();
const SalesPerson = require('../db').models.SalesPerson;

module.exports = router;

router.get('/', function(req, res, next){
	SalesPerson.findAll()
	.then(function(salesPeople){
		res.send(salesPeople);
	})
	.catch(next);
})

router.post('/:name', function(req, res, next){
	console.log(req.params.name);
	SalesPerson.create({
		where: {
			name: req.params.name
		}
	})
	.then(function(salesPerson){
		res.send('salesPerson created ', + salesPerson )
	})
	.catch(next);
});

router.delete('/:name', function(req, res, next){

});
