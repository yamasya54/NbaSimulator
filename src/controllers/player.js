"use strict";

const Player = require("../models/player");
const team = require("./team");

module.exports = {
  list: async (req, res) => {
    // Filters:
    let filters = {};

    const data = await res.getModelList(Player, filters,["teamId",{path:"teamId",populate:'players'}]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Player, filters),
      data,
    });
  },
};
