const router = require('express').Router();
const Region = require('../db').models.Region;
module.exports = router;

router.get('/', function(req, res, next){
	Region.findAll()
	.then(function(regions){
		res.send(regions);
	})
	.catch(next);
})

router.post('/', function(req, res, next){
	Region.create({
		zipCode: req.body.zipCode
	})
	.then(function(region){
		res.send(region);
	})
	.catch(next);

});

router.delete('/:id', function(req, res, next){
	Region.destroy({
		where: { id: req.params.id }
	})
	.then(function(regions){
		res.sendStatus(200)
	})	
	.catch(next);
});
