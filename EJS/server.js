const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
            title: "Twitter",
            message: "@vitiellolucas"
        },
        {
            title: "Instagram",
            message: "@vitiellolucas"
        },
        {
            title: "Github",
            message: "VitielloL"
        },
        {
            title: "Tiktok",
            message: "@vitiellolucas"
        }
    ]
    const subtitle = "A modeling language for creating html page using javascript"
    res.render("pages/index", {
        socialNetworks: items,
        subtitle: subtitle
    });
})

app.get("/about", function (req, res){
    res.render("pages/about")
})

app.listen(8080);
console.log("server on")