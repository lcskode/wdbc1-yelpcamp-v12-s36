var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleware goes here
// create middleware obj for all middlewares

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
  // is user logged in?
  if(req.isAuthenticated()){  
    // find campground by ID
    Campground.findById(req.params.id, function(err, foundCampground){
      if(err){
        req.flash("error", "Campground not found.");
        res.redirect("back");
      } else {        
        // does user own the campground?
        if (foundCampground.author.id.equals(req.user._id)) {
          // foundCampground.author.id is an OBJECT, req.user._id is a STRING
          // == OR === will not work, use .equals() instead to compare them
          next();
        } else {
          // if not own campground, redirect
          req.flash("error", "You don't have permission to do that.");
          res.redirect("back");
        }
      } 
    });
  } else {
    // if not logged in, pop up flash msg
    req.flash("error", "You need to be logged in to do that.");
    //then, redirect
    res.redirect("back");
  }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
  // is user logged in?
  if(req.isAuthenticated()){  
    // find comment by ID
    Comment.findById(req.params.comment_id, function(err, foundComment){
      if(err){
        res.redirect("back");
      } else {        
        // does user own the comment? compare if logged in user (req.user._id) matched
        if (foundComment.author.id.equals(req.user._id)) {
          // foundCampground.author.id is an OBJECT, req.user._id is a STRING
          // == OR === will not work, use .equals() instead to compare them
          next();
        } else {
          // if not own comment, redirect
          req.flash("error", "You don't have permission to do that.");
          res.redirect("back");
        }
      } 
    });
  } else {

    // if not logged in, pop up flash msg
    req.flash("error", "You need to be logged in to do that.");
    //then, redirect
    res.redirect("back");

    // if user not logged in, redirect
    // res.redirect("back");
  }
}

middlewareObj.isLoggedIn = function(req, res, next){
  if(req.isAuthenticated()){
    // if authenticated, continue showing pages
    return next();
  }
  // if not authenticated,
  // create flash message before redirecting to /login
  req.flash("error", "You need to be logged in first to do that.");

  // show login page, 
  res.redirect("/login");
}

module.exports = middlewareObj;