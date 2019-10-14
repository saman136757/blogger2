var express = require('express');
var router = express.Router();
let User = require('../models/user')
const passport = require('passport');
const auth = require('../tools/auth');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.get('/login', function(req, res, next) {
    res.render('login', { msg: 'Express' });
  });
  router.get('/signup', function(req, res, next) {
    res.render('signup.ejs', { msg: 'null' });
  });
  

  router.post('/addUser',  async (req, res) => {
    console.log(req.body);
    
    if (!req.body.firstName || !req.body.mobile || !req.body.lastName || !req.body.password || !req.body.userName 
      || !req.body.gender) {
        return res.json({success: false, msg: "empty field"});
    };

    if (req.body.password.length < 2 || req.body.password.length > 20) {
      return res.json({success: false, msg: "password length"});
    }

    User.findOne({mobile: req.body.mobile}, (err, existUser) => {
      
      if (err) return res.json({success: false, msg: 'user not save', err});
      if (existUser) return res.json({success: false, msg: 'mobile number already token'})

      const NEW_USER = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        mobile: req.body.mobile,
        userName: req.body.userName,
        gender:req.body.gender,
      });

      NEW_USER.save((err, user) => {
        if (err) return res.json({success: false, msg: 'user not save', err});
  
        return res.json({success: true, msg: 'user added', user})
      });
    });
});
// router.get('/profile', function(req, res, next) {
//   res.render('profile', {user : req.user});
// });
router.post('/profile', passport.authenticate('local'), async (req, res, next) => {
  try {    
    // return res.render('userPanel', {title: 'dashboard', user: req.user})
    User.findOne({mobile:req.body.mobile},(err,user)=>{
      if(err) res.json({success:false,msg:'not found'});
      if(user.role==="admin"){
        res.render('adminProfile',{message:user,msg:null})
      }else{
        res.render('userProfile',{user:user,msg:null})
      }
      
    })
  } catch (err) {
    next(err);
  }


});

router.post('/editProfile', async (req,res)=>{
 
  User.updateOne({mobile:req.body.newmobile},{$set:{userName:req.body.newuserName,firstName:req.body.newfirstName,lastName:req.body.newlastName}},(err,user)=>{
      if(err) res.json({success:false,msg:'DB Error'})
      //User.findOne({mobile:req.body.newmobile},(err,newUser)=>{
          //if(err) return res.json('DB Error');
          return  res.redirect('/login')
      //})  
  }) 
});


  module.exports = router;