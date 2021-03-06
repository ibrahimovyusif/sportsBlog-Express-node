var express = require('express');
var router = express.Router();

Category = require('../models/Category.js')


/* GET home page. */
router.get('/articles', function(req, res, next) {
  res.render('manage_articles', { title: 'Manage Articles'});
});

router.get('/categories', function(req, res, next) {
	Category.getCategories(function(err, categories){
		if(err){
			res.send(err);
		} else{
			res.render('manage_categories', { 
				title: 'Manage Categories',
				categories: categories 
			});
		}
	});

});

router.get('/articles/add', function(req, res, next) {
  res.render('add_article', { title: 'Create Article'});
});

router.get('/categories/add', function(req, res, next) {
  res.render('add_category', { title: 'Create Category'});
});

router.get('/articles/edit/:id', function(req, res, next) {
  res.render('edit_article', { title: 'Edit Article'});
});

router.get('/categories/edit/:id', function(req, res, next) {
  Category.getCategoryById([req.params.id], function(err,category){
  		if(err){
			res.send(err);
		} else{

	        res.render('edit_category', { 
	  	       title: 'Edit Category',
	  	       category: Category
	        });
		}
		});
  });



module.exports = router;
