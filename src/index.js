const { app } = require("./app.js");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(async () => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection Error ", err);
  });
