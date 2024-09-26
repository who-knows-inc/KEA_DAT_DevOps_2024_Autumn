import express from "express";
const app = express();

import session from "express-session";

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get("/setsession", (req, res) => {
    req.session.name = "Ali";
    req.session.accessLevel = "admin";
    res.send({ message: "Hello World" });
});

app.get("/getsession", (req, res) => {
    res.send({ message: req.session.name });
});

app.get("/destroysession", (req, res) => {
    res.session.name = undefined;
    res.send({ message: "Session destroyed" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server is running on port", PORT));