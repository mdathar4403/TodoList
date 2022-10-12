
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');

var items =["Buy Food","Play Games"];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
   
    var options= {
        weekday:"long",
        day:"numeric",
        month:"long",
    };
   
    var date = new Date()
    var dayIndex = date.getDay()
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var day = dayList[dayIndex];

    var day= date.toLocaleDateString("en-US",options);


    res.render("list", {kindOfDay: day, newListItems:items});
});
app.post("/",function(req,res){
    item= req.body.newItem;
    
    items.push(item);
    res.redirect("/");
})


app.listen(3000, function () {
    console.log("Server started on port 3000");
});