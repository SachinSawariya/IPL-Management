const asyncHandler = require("../common/asyncHandler");
const sendResponse = require("../common/response");
const playerService = require("../services/playerService");

const getList = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, team, search, sortBy, sortOrder } = req.body;

  const result = await playerService.getList({
    page,
    limit,
    team,
    search,
    sortBy,
    sortOrder,
  });

  res.message = "Player list fetched successfully";
  return sendResponse(200, result, res);
});

const getPlayerDetails = asyncHandler(async (req, res) => {
  const playerId = req.params.id;

  const result = await playerService.getPlayerDetails(playerId);

  if (!result) {
    res.message = "Player not found";
    return sendResponse(404, {}, res);
  }
  res.message = "Player details fetched successfully";
  return sendResponse(200, result, res);
});

const addPlayer = asyncHandler(async (req, res) => {
  const data = req.body;

  const result = await playerService.addPlayer(data);

  if (result.flag) {
    res.message = result.message;
    return sendResponse(201, result.data, res);
  }

  res.message = "Failed to add player";
  return sendResponse(500, {}, res);
});

const updatePlayer = asyncHandler(async (req, res) => {
  const playerId = req.params.id;
  const data = req.body;

  const result = await playerService.updatePlayer(playerId, data);

  if (result) {
    res.message = "Player updated successfully";
    return sendResponse(200, result, res);
  }

  res.message = "Player Not found, please give correct id";
  return sendResponse(404, {}, res);
});

const deletePlayer = asyncHandler(async (req, res) => {
  const playerId = req.params.id;

  const result = await playerService.deletePlayer(playerId);

  if (result) {
    res.message = "Player deleted successfully";
    return sendResponse(200, {}, res);
  }

  res.message = "Player not found or deletion failed";
  return sendResponse(404, {}, res);
});

module.exports = {
  getList,
  getPlayerDetails,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
