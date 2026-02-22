console.log("front-end.js online");

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3050;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.render('index.ejs');
});
app.get("/my-projects", (req, res) =>{
    res.render('my-projects.ejs');
});
app.get("/my-skills", (req, res) =>{
    res.render('my-skills.ejs');
});
app.get("/contact-me", (req, res) =>{
    res.render('contact-me.ejs');
});

app.listen(PORT, () => {
    console.log(`Frontend server running on port ${PORT}`);
    console.log(`Frontend: http://localhost:${PORT}/`);
});

module.exports = app;