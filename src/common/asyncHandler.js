const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.error(err.message);
    res.status(500).json({
      code: "ERROR",
      message: err.message,
      data: {},
    });
  });
};

module.exports = asyncHandler;
