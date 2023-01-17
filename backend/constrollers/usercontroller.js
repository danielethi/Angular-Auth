const User = require("../models/usermodel");
const jwt=require('jsonwebtoken')

const getAllUsers = async (req, res, next) => {
  try {
    let result = await User.find();
    res.send(result);
  } catch (err) {
    res.send("data deos not exist in the database");
  }
};

const addUsers = async (req, res, next) => {
  const { email, password } = req.body;
  const result = new User({
    email,
    password,
  });
  await result.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      let payload={subject:data._id}
      let token=jwt.sign(payload,'secretKey')
      res.status(200).send({token});
    }
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  await User.findOne({ email, email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.status(401).send("invalid email");
      } else {
        if (user.password !== password) {
          res.status(401).send("invalid password!");
        } else {
          let payload={subject:user._id}
          let token=jwt.sign(payload,'secretKey')
          res.status(200).send({token}); // ("login successful!"  + user)
        }
      }
    }
  });
}

const getEvents = (req, res) => {
    let events = [
      {_id:1, name:"Auto Expo",description:"some discription",date:"2018-04-11" },
      {_id:2, name:"Auto Expo",description:"some discription",date:"2012-04-11" },
      {_id:3, name:"Auto Expo",description:"some discription",date:"2019-04-11" },
      {_id:4, name:"Auto Expo",description:"some discription",date:"2023-04-11" },
      {_id:5, name:"Auto Expo",description:"some discription",date:"2019-04-11" },
      {_id:6, name:"Auto Expo",description:"some discription",date:"2023-04-11" }
     
    ];
  res.json(events); 
}
const getSpecialEvents = (req, res) => {
    let events = [
      {_id:1, name:"Auto Expo",description:"some discription",date:"2019-04-11" },
      {_id:2, name:"Auto Expo",description:"some discription",date:"2018-04-11" },
      {_id:3, name:"Auto Expo",description:"some discription",date:"2021-04-11" },
      {_id:4, name:"Auto Expo",description:"some discription",date:"2022-04-11" },
      {_id:5, name:"Auto Expo",description:"some discription",date:"2023-04-11" },
      {_id:6, name:"Auto Expo",description:"some discription",date:"2024-04-11" }
     
    ];
  res.json(events); 
}


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.login = login;
exports.getEvents=getEvents;
exports.getSpecialEvents=getSpecialEvents

