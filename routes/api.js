var express = require('express')
var router = express.Router()
var Profile = require('../models/Profile')

router.get('/', function(req, res, next){

    Profile.find(null, function(err, profiles){
        
        if (err){
        res.json({
            confirmation: 'fail',
            message: err
        })
            return
        }

        res.json({
            confirmation: 'success',
            results: profiles
        })
    })

})

module.exports = router