const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./server/db/models");
const httpServer = require("http").Server(app);
const bodyParser = require("body-parser");

//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const apiUser = require("./server/routes/api/user/login");
const apiUserReg = require("./server/routes/api/user/register");
const userAuth = require('./server/user/auth');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Get ready for user authentication and session
userAuth.start(app);

// Define API routes here
app.use("/api/user", apiUser);
app.use("/api/user/register", apiUserReg);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(() => {
  httpServer.listen(PORT, console.log(`Server listening on PORT ${PORT}`));
});


