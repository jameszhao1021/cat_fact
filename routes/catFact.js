var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',   function(req, res, next) {
    
fetch('https://catfact.ninja/fact')
.then(response=>response.json())
.then(data=>{
    console.log(data)
    res.render('cat/fact',{ fact: data.fact, title: 'Cat Fact' })
});
});


module.exports = router;



