var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    User            = require("./models/user");
    seedDB          = require("./seeds");

// REQUIRING ROUTES 
var campgroundRoutes  = require("./routes/campgrounds"),
    commentRoutes     = require("./routes/comments"),
    indexRoutes       = require("./routes/index");


// ============================================================================
// APP CONFIG
// ============================================================================

// use mLab db instead of local mongodb
// mongoose.connect("mongodb://admin:admin123@ds149144.mlab.com:49144/wdbc1_yelp_camp"); 

// use yelp_camp db if exists, if not, it will create yelp_camp db.
mongoose.connect("mongodb://localhost/yelp_camp");
// use body parser
app.use(bodyParser.urlencoded({extended: true}));
// set ejs to render ejs files
app.set("view engine", "ejs");
// use public directory with absolute path
app.use(express.static(__dirname + "/public"));
// tell app to use _method
app.use(methodOverride("_method"));
// use flash
app.use(flash());

// remove and create new data from db
// seedDB();



// ============================================================================
// PASSPORT CONFIG
// ============================================================================

// tell app to use express-session
app.use(require("express-session")({
  secret: "Once again this is another part of auth",
  resave: false,
  saveUninitialized: false
}));

// tell the app to use passport to initialize session
app.use(passport.initialize());
app.use(passport.session());
// create new local strategy using user.authenticate method during login coming from passport-local-mongoose
passport.use(new localStrategy(User.authenticate()));
// reading session and encoding it and put it back in the session
passport.serializeUser(User.serializeUser());
// reading session and un-encoding it
passport.deserializeUser(User.deserializeUser());

// middleware, pass req.user to each and every route, this will be called to every route or page

app.use(function(req, res, next){
  // this will check if there is currentUser login or none
  res.locals.currentUser = req.user;
  // send flash message if there is an important event
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// tell app to use route files 
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



// ============================================================================
// START SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Yelpcamp server has started...");
});