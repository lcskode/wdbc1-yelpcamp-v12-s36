#### S35-L310 YelpCamp V11.1  
**Adding Flash**  
* Add bootstrap alerts to header  

#### S35-L308 YelpCamp V11  
**Adding Flash**  
* Install and configure connect-flash  

#### S35-L307 YelpCamp V10.4  
* Refactor Middleware  

#### S35-L306 YelpCamp V10.3  
**Authorization - Comments**  
* User can only edit his/her comments  
* User can only delete his/her comments  
* Hide/Show edit and delete buttons  

#### S35-L303-305 YelpCamp V10.2  
**Editing Comments**  
* Add Edit route for comments  
* Add Edit button  
* Add Update route  

**Deleting Comments**  
* Add Destroy route  
* Add Delete button  

#### S35-L301-302 YelpCamp V10.1  
**Authorization - Campgrounds**  
* User can only edit his/her campgrounds  
* User can only delete his/her campgrounds  
* Hide/Show edit and delete buttons  

#### S35-L299-300 YelpCamp V10  
**Editing Campgrounds**  
* Add Method-Override  
* Add EDIT ROUTE for campgrounds  
* Add link to edit page  
* Add update route  
* Fix $set problem  
* Add DESTROY route  
* Add Delete button  

#### S34-L297 YelpCamp V9  
**Users and Campgrounds**  
* Prevent an unauthenticated user from creating a campground  
* Save username+id to newly created campground  

#### S34-L296 YelpCamp V8  
**Users and Comments**  
* Associate users and comments  
* Save author's name to a comment automatically  

#### S34-L295 YelpCamp V7.1  
**Refactor Routes**  
* Use Express router to reorganize all routes  

#### S33-L294 YelpCamp V6.5  
**Show/Hide Links**  
* Show/Hide auth links correctly  

#### S33-L293 YelpCamp V6.4
**Logout / Navbar**  
* Add logout route  
* Prevent user from adding a comment if not signed in  
* Add links to navbar  

#### S33-L292 YelpCamp V6.3
**Login**
* Add login routes  
* Add login template  

#### S33-L291 YelpCamp V6.2
**Register**
* Configure passport  
* Add register routes  
* Add register templates  

#### S33-L290 YelpCamp V6.1
**Add User Model**
* Install all npm packages needed for auth  
  * passport  
  * passport-local  
  * passport-local-mongoose  
  * express-session    
* Define User Model  

#### S31-L282 YelpCamp V5
**Finish Styling Show Page**
* Add public directory  
* Add custom stylesheets  

#### S31-L280 YelpCamp V5  
**Style Show Page**
* Add sidebar to a show page  
* Display comments nicely  

#### S31-L278 and S31-L279 YelpCamp V4  
**Comment New/Create**  
* Discuss nested routes  
* Add the comment new and create routes  
* Add the new comment form  

**CAMPGROUND ROUTES**  

name   | url              | verb |  
------ | ---------------- | ---- |  
INDEX  | /campgrounds     | GET  |  
NEW    | /campgrounds/new | GET  |  
CREATE | /campgrounds     | POST |  
SHOW   | /campgrounds/:id | GET  |  

**CAMPGROUND NESTED ROUTES FOR COMMENTS**  

name   | url                       | verb |  
------ | ------------------------- | ---- |  
NEW    | /campgrounds/:id/new      | GET  |  
CREATE | /campgrounds/:id/comments | POST |  

#### S31-L277 YelpCamp V3.3
**Add the comment model**  
* Make our errors go away  
* Display comments on campground show page  

#### S31-L275 YelpCamp V3.2  
**Add Seeds File**  
* Add a seeds.js file  
* Run the seeds file everytime the server starts  

#### S31-L274 YelpCamp V3  
**Refactor Mongoose Code**  
* Create models directory  
* Use model.exports  
* Require everything correctly  

#### S28-L259 YelpCamp V2  
**Show Page**  
* Review the RESTful routes 
* Add description tou our campground model  
* Show db.collection.drop()  
* Add a show route/template

#### S28-L258 YelpCamp V2  
**Add MongoDB using Moongoose**  
* Install and configure mongoose  
* Setup CampGround model 
* Use CampGround model inside routes  

#### S26-L250 YelpCamp V1  
**Style navbar and form**  
* Add navbar to all templates  
* Style the new campground form  

#### S26-L249 YelpCamp V1  
**Style the campgrounds page**  
* Add a better header/title  
* Make campgrounds display in a grid  

#### S26-L247 YelpCamp V1  
**Creating New Campgrounds**  
* Setup new campground POST route  
* Add in body-parser  
* Setup route to show form  
* Add basic unstyled form  

#### S26-L246 YelpCamp V1  
**Layout and Basic Styling**  
* Create header and footer partials  
* Add in bootstrap  

#### S26-L245 YelpCamp V1  
**Add landing page**  
**Add campgrounds page that lists all campgrounds**  
**Each campground has:**  
* Name  
* Image  





