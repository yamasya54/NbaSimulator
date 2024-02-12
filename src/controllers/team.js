"use strict";

const Team = require("../models/team");

module.exports = {
  list: async (req, res) => {
    // Filters:
    let filters = {};

    const data = await res.getModelList(Team, filters);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Team, filters),
      data,
    });
  },
};
