// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const celeb = require("../models/Celebrity.model")
const movie = require("../models/Movie.model")

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app


let newcelebs = new Schema [{
    name: "Harry Styles",
    occupation: "Singer",
    catchPhrase: "it's a family show, or is it?"
  },
  {
    name: "Sam Smith",
    occupation: "singer",
    catchPhrase: "I love him"
  },
  {
    name: "Florence Pugh",
    occupation: "Actress",
    catchPhrase: "Miss Flo"
  },
  {
    name: "Jack nickleson",
    occupation: "actor",
    catchPhrase: "it's me!"
  }
  ]

let newMovies = new Schema [
  {
    title: "batman",
    Genre: "action",
    plot: "a crazy man dressed in bat suitthinks he's a superhero",
    cast: ["Harry Styles", "Sam Smith"]
  },
  {
    title: "chick",
    Genre: "comedy",
    plot: "life of a homeless dressed in a chicken costume",
    cast: ["Jack Nickelson", "Harry Styles"],
  },
  {
    title: "dramatic end",
    Genre: "drama",
    plot: "everything tragic happens in this movie",
    cast: ["florence Pugh", "Sam Smith"]
  },
  {
    title: "strange",
    Genre: "horror",
    plot: "a wierd creature is after people ",
    cast: ["Florence Pugh", "Harry Styles"]
  }
]
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-movies-celebrities";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  // .then(() => {
  //   const newdata = celeb.create(newcelebs);
  //   return newdata;
  // })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })

  // .then(() => {
  //   const newMo = movie.create(newMovies);
  //   return newMo;
  // })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
