require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};


const usersHandler = require("./usersHandler");
const movieHandlers = require("./movieHandlers");

app.get("/api/users", usersHandler.getUser);
app.get("/api/users/:id", usersHandler.getUserById);
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", usersHandler.postUsers);

app.put("/api/movies/:id", movieHandlers.updateMovie);
app.put("/api//api/movies/:id", usersHandler.updateUsers);

app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.delete("/api/users/:id", usersHandler.deleteUsers);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/", welcome);



