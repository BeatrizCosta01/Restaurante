var conn = require('./../inc/db')
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  conn.query("SELECT * FROM tb_users ORDER BY name",(err,results) => {
    if(err){
      res.send(err)
    }else{
      res.send(results)
    }
  })
});

module.exports = router;
