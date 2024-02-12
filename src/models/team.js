"use strict";

const { Schema, model } = require("mongoose");

const TeamSchema = new Schema(
  {
    _id:Number,
    abbreviation: String,
    city: String,
    conference: String,
    division: String,
    full_name: String,
    name: String,

    
  },
  { collection: "teams", timestamps: false }
);

module.exports = model("Team", TeamSchema);
