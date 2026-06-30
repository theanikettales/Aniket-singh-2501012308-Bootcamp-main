import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("This is about page");
});

app.get("/job", (req, res) => {
    res.send("This is job page");
});

app.get("/contact", (req, res) => {
    res.send("This is contact page");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});