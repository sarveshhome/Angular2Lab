const express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    apiRoutes = require("./server/routes/apiRoutes"),
    webRoutes = require("./server/routes/webRoutes");

let app = express();

//application/json
app.use(bodyParser.json());
//x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "./Client")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/api", apiRoutes);
app.use("/", webRoutes);

let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});