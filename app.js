const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require('./models/Trainings');
require('./models/Users');
const Trainings = mongoose.model("trainings");
const Users = mongoose.model("users");

mongoose.connect(keys.mongoURI, {useNewUrlParser: true}, (err) => {
  {
    if (err) {
      console.log('Some problem with the connection ' + err);
    } else {
      console.log('The Mongoose connection is ready');
    }
  }
})

const app = express();
app.use(cors())
app.use(bodyParser.json());


const createTotalSets = (sets) => {
  let result = 0;
  for( let index in sets) {
    const set = sets[index]
    result += Number(set)
  }
  return result
}


app.use("/api/trainings/create", async (req, res) => {
  const training = new Trainings({
    userId: req.body.userId,
    date: req.body.date,
    sets: req.body.sets,
    totalReps: createTotalSets(req.body.sets),
    totalSets: req.body.sets.length
  });
  console.log('training:', training)
  await training.save();
  res.status(200).send(true)
});

app.use("/api/trainings/:id", async (req, res) => {
  await Trainings.find({
    userId: req.params.id
  }, (err, result) => {
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(result)
    }
  })
});

app.use("/api/users", async (req, res) => {
  await Users.find({}, async (err, users) => {
    await Trainings.find({}, async (err, trainings) => {
      const result = users.map(user => ({
        userId: user.id,
        userName: user.username,
        created: user.created,
        trainings: trainings.filter(training => training.userId === user.id)
      }))
      res.status(200).send(result)
    })
  })
});

app.use('/api/auth/auto', async (req, res) => {
  let user = await Users.findById(req.body.id);
  if (user) {
    res.status(200).send({
      id: user._id,
      name: user.username,
    })
  }
})

app.use('/api/auth', async (req, res) => {
  let user = await Users.findOne({
    username: req.body.name,
    password: req.body.password
  });
  if (user) {
    return res.status(200).send({
      id: user.id,
      name: user.username,
    })
  }

  let userWithName = await Users.findOne({
    username: req.body.name,
  })
  if (userWithName) {
    return res.status(401).send(false)
  }

  const newUser = new Users({
    username: req.body.name,
    password: req.body.password,
    created: new Date()
  });
  await newUser.save();
  res.status(200).send({
    id: newUser._id,
    name: newUser.username,
  })

})

if (process.env.NODE_ENV === "production") {
  console.log('-------- build ----------');
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT);
module.exports = app;
