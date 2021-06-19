const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const data = require(__dirname+"/items.js");
const ladyData = require(__dirname + "/diff_ladies.js");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));

app.use(session({
    secret : "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/productsDB', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

const ProductSchema = new mongoose.Schema({
    item_id: Number,
    image: String,
    name: String,
    lady: String,
    Price: String,
    Rating: Number
});

var product = mongoose.model('product', ProductSchema);

const items = data.getProducts();
const ladiesArr = ladyData.getLady();

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

items.forEach(function(item){
    const item1 = new product(item);
})

app.get("/", function(req,res){
    if(req.isAuthenticated()){
        res.render("home", {lady : ladiesArr, login:"hidden", logout:" "});
    }else{
        res.render("home", {lady : ladiesArr, login:" ", logout:"hidden"});
    }
})

app.get("/login", function(req,res){
    res.render("login");
})

app.get("/register", function(req,res){
    res.render("register");
})

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
})

app.get("/thanku",function(req,res){
    res.render("thanku");
})

app.get("/product", function(req,res){
    if(req.isAuthenticated()){
        res.render("product", {itemData: items, login:"hidden", logout:" "});
    }else{
        res.render("product", {itemData: items, login:" ", logout:"hidden"});
    }
})

app.get("/ladies", function(req,res){
    if(req.isAuthenticated()){
        res.render("ladies", {ladyItems : ladiesArr, login:"hidden", logout:" "});
    }else{
        res.render("ladies", {ladyItems : ladiesArr, login:" ", logout:"hidden"});
    }
})

app.get("/:ladyName", function(req, res){
    const requestedTitle = req.params.ladyName;
    ladiesArr.forEach(function(lady){
        if(lady.name === requestedTitle){
            if(req.isAuthenticated()){
                res.render("Lady1", {ladyItem : lady, login:"hidden", logout:" "});
            }else{
                res.render("Lady1", {ladyItem : lady, login:" ", logout:"hidden"});
            }
        }
    })    
})



app.post("/product", function(req,res){
    console.log(req.body);
    res.redirect("product");
})

app.post("/payment" , function(req,res){
    if(req.isAuthenticated()){
        product.findOne({name: req.body.productId}, function(err, foundItem){
            if(foundItem){
              res.render("payment" , {itemData : foundItem, login:"hidden", logout:" "});
            }
        } 
        )}else{
        res.redirect("/login");
    }
});

app.post("/register", function (req, res) {
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/");
            });
        }
    })
})

app.post("/login", function (req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, function(err){
        if(err){
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/");
            });
        }
    })
})

app.post("/thanku", function(req,res){
    res.redirect("/thanku");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
})
