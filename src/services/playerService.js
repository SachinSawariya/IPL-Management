const { convertPaginationResults } = require("../common/pagination");
const Player = require("../models/player.model");

const getList = async (data) => {
  const { page, limit, team, search, sortBy, sortOrder } = data;
  const filter = {};

  const sort = {};
  if (sortBy) {
    sort[sortBy] = sortOrder === "desc" ? -1 : 1;
  }

  const offset = (page - 1) * limit;
  const filtercount = 0;

  const matchQuery = {};

  if (team) {
    matchQuery["team"] = team;
  }
  if (search) {
    matchQuery["$or"] = [{ name: { $regex: search, $options: "i" } }];
  }
  const users = await Player.find(matchQuery)
    .skip(offset)
    .limit(limit)
    .sort(sort);

  const total = users?.length
    ? (
        await Player.aggregate([
          {
            $match: matchQuery,
          },
          { $count: "totalCount" },
        ])
      )[0]["totalCount"]
    : 0;

  const result = convertPaginationResults(
    [{ metadata: [{ total }], docs: users }],
    { offset, limit },
    filtercount
  );

  return result;
};

const getPlayerDetails = async (id) => {
  return await Player.findById(id).lean();
};

const addPlayer = async (data) => {
  try {
    const player = new Player(data);
    const result = await player.save();

    return { flag: true, data: result, message: "Player created successfully" };
  } catch (error) {
    console.log("Error - creating player");
    throw error;
  }
};

const updatePlayer = async (id, data) => {
  try {
    return await Player.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    console.log("Error while updating the player");
    throw error;
  }
};

const deletePlayer = async (id) => {
  const result = await Player.findByIdAndDelete(id);
  return result ? true : false;
};

module.exports = {
  getList,
  getPlayerDetails,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
