const sendResponse = (status, data, res) => {
  return res.status(status).json({
    message: res.message,
    data: data,
  });
};

module.exports = sendResponse;
