const express = require("express")
const app = express()

// ------------Routes--------------

app.set("view engine", "ejs")

app.listen(3000)

app.get("/", (req, res) => {
    res.send("Hello Express!")
  })
  
  app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!")
  })

  app.get("/ian", (req, res) => {
    res.send("I'm bad at coding.")
  })

  app.get("/user", (req, res) => {
    res.send("Received a GET request for user!");
  });
  
  app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
  });

app.get("/", (req, res) => {
    res.send("Try navigating to /user.");
  });
  
app.use(express.static("./styles"));

// ----------- PORT ------------

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
  })