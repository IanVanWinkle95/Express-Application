const express = require("express")
const app = express()
const port = 3000;
const bodyParser = require('body-parser')
const users = require("./data/users");
const posts = require("./data/posts");

// ------------Routes--------------

app.set("view engine", "ejs")

app.listen(3000)

app.get("/", (req, res) => {
  res.render('index', {title: 'Home'})
    res.send("Hello Express!")
  })
  
  app.post("/user", (req, res) => {
    res.render('about', {title: 'Home'})
    res.send("Received a POST request for user!");
  });

app.get("/", (req, res) => {
    res.render('404', {title: 'Home'})
    res.send("Try navigating to /user.");
  });
  
//   app.get("/user", (req, res) => {
//     res.send(`Received a GET request for user!
//   Try navigating to /user/somevalue/profile/somevalue.`);
//   });
  
//   app.get("/user/:userID", (req, res) => {
//     res.send(`Navigated to the user page for: ${req.params.userID}.`);
//   });
  
//   app.get("/user/:userID/profile", (req, res) => {
//     res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
//   });
  
//   app.get("/user/:userID/profile/:data", (req, res) => {
//     res.send(
//       `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
//     );
//   });

//   app.route('/learner')
//   .get((req,res) =>{
//     res.send('Get a random learner.')
//   })
//   .post((req,res) => {
//     res.send('Add a learner')
//   })
//   .put((req,res) => {
//     res.send("Update the learner's information.")
//   })

// serve static files from the styles directory

app.use(express.static("./styles"));

// require the filesystem module
// const fs = require('fs')
// const fs = require("fs");
// define the template engine
// app.engine("perscholas", (filePath, options, callback) => {
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err);

//     // Here, we take the content of the template file,
//     // convert it to a string, and replace sections of
//     // it with the values being passed to the engine.
//     const rendered = content
//       .toString()
//       .replaceAll("#title#", `${options.title}`)
//       .replace("#content#", `${options.content}`);
//     return callback(null, rendered);
//   });
// });

// app.set("views", "./views"); // specify the views directory
// app.set("view engine", "ejs"); // register the template engine

// app.get("/", (req, res) => {
//   const options = {
//     title: "Rendering Views with Express",
//     content:
//       "Here, we've created a basic template engine using <code>app.engine()</code> \
//       and the <code>fs</code> module, then used <code>res.render</code> to \
//       render this page using custom content within the template.<br><br> \
//       Generally, you won't want to create your own view engines, \
//       but it important to understand how they work behind the scenes. \
//       For a look at some popular view engines, check out the documentation for \
//       <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
//       <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
//       <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
//       More complete front-end libraries like React, Angular, and Vue \
//       also have Express integrations.",
//   };

//   res.render("index", options);
// });

// ----------- PORT ------------

app.use((req, res) => {
  res.status(404)
  res.json({ error: "resource not found" })
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
  })