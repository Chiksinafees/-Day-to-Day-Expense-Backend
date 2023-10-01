const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/Database");

const signupRoute = require("./routes/signupLoginRoute");
const expenseRoute = require("./routes/expenseRoute");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/signup-table", signupRoute);
app.use("/expense-table", expenseRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running on localhost 3000`);
    });
  })
  .catch((err) => console.error(err));
