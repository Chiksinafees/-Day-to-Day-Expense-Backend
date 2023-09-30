const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/Database");
const signupRoute = require("./routes/signupLoginRoute");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/signup-table", signupRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running on localhost 3000`);
    });
  })
  .catch((err) => console.error(err));
