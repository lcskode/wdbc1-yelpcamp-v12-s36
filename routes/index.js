var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


// ROOT ROUTE
router.get("/", function(req, res){
  res.render("landing");
});

// REGISTER ROUTES
// show user register form
router.get("/register", function(req, res){
  res.render("register");
});
// handle user register logic from register form
router.post("/register", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      //  
      // console.log(err);
      req.flash("error", err.message);
      return res.redirect("/register");
    }
    // no need for else statement because return is used
    passport.authenticate("local")(req, res, function(){
      req.flash("success", "Welcome to YelpCamp " + user.username);
      res.redirect("/campgrounds");
    });
  });
});

// LOGIN ROUTES
// show user login form
router.get("/login", function(req, res){
  // show login and passing value of flash error
  res.render("login");
});
// handle user login logic from login form
// PATTERN --->  app.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local", {
  successRedirect: "/campgrounds",
  failureRedirect: "/login"
}), function(req, res){

});

// LOGOUT ROUTE
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "You are logged out!");
  res.redirect("/campgrounds");
});

module.exports = router;