"use strict";

const { Schema, model } = require("mongoose");

const PlayerSchema = new Schema(
    {
      fullName: String,
      firstName: String,
      lastName: String,
      position: String,
      teamId: {
        type: Schema.Types.ObjectId,
        ref: 'Team'},
    },
    { collection: "players", timestamps: false }
  );
 
 

module.exports = model("Player", PlayerSchema);
