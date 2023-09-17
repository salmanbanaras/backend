const express = require("express");
const axios = require("axios");
const Inventory = require("../models/inventory");
const router = express.Router();
const moment = require("moment");
const config = require("../config/config");



router.get("/all", async (req, res, next) => {
  res.send("ok")
});



module.exports = { router };
