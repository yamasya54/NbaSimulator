"use strict";

const Player = require("../models/player");

module.exports = {
  list: async (req, res) => {
    // Filters:
    let filters = {};

    const data = await res.getModelList(Player, filters);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Player, filters),
      data,
    });
  },
};
