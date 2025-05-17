const Joi = require("joi");

const playerCreateUpdateSchema = Joi.object({
  name: Joi.string().trim().required(),
  team: Joi.string().trim().required(),
  country: Joi.string().trim().required(),
  runs: Joi.number().integer().required(),
  image: Joi.string().uri().required(),
  role: Joi.string().valid("Batsman", "Bowler", "All-rounder").required(),
  salary: Joi.number().positive().required(),
});

module.exports = { playerCreateUpdateSchema };
