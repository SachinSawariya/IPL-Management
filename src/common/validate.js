const sendResponse = require("./response");

const validate = (validator) => {
  return async function (req, res, next) {
    try {
      req.body = await validator.validateAsync(req.body);
      next();
    } catch (err) {
      console.error("Error - ValidationError", err);
      res.message = err?.message ?? err;
      if (err.isJoi) return sendResponse(400, {}, res);
      next(sendResponse(400, {}, res));
    }
  };
};
module.exports = validate;
