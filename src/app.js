const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const path = require('path');

//public static path
const static_path = path.join(__dirname, "../public");

app.set('views', path.join(__dirname, '../templates/views'));

app.set('view engine', 'hbs');
app.use(express.static(static_path));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

//routing
app.get("", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("404errorpage", {
        errorMessg: "Oops! Page Not Found "
    });
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});