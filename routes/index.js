var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get("/elective",function(req,res,next){
  res.render("elective")
})

module.exports = router;
