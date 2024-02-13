"use strict";

const { Schema, model } = require("mongoose");

const TeamSchema = new Schema(
  {
    
    fullName: String,
    name: String,
    abbreviation: String,
    city: String,
    conference: String,
    division: String,
    players: [{ 
      type: Schema.Types.ObjectId,
       ref: 'Player' }]
    
  },
  { collection: "teams", timestamps: false }
);

module.exports = model("Team", TeamSchema);
