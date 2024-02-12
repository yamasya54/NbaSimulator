"use strict";

const { Schema, model } = require("mongoose");

const PlayerSchema = new Schema(
    {
        _id:Number,
      fullName: String,
      firstName: String,
      lastName: String,
      position: String,
      teamId: Number,
      teamName: String,
      
    },
    { collection: "players", timestamps: false }
  );
 

module.exports = model("Player", PlayerSchema);
