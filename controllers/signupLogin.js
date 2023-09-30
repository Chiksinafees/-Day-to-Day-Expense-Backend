const SignupTable = require("../models/signup");
const bcrypt = require("bcrypt");
const util = require("util");

const hashPassword = util.promisify(bcrypt.hash);

exports.signupHandler = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    const existingUser = await SignupTable.findOne({ where: { Email } });

    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const saltRounds = 10;
    const hashedPassword = await hashPassword(Password, saltRounds);

    const signup = await SignupTable.create({
      Name,
      Email,
      Password: hashedPassword,
    });

    res.status(201).json(signup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};



exports.loginHandler = async (req, res) => {
  const { loginEmail, loginPassword } = req.body;
  try {
    const existingUser = await SignupTable.findOne({
      where: { Email: loginEmail },
    });
    console.log("existingUserrrrrrrrrrrr", existingUser);

    if (existingUser) {
      const storedPassword = existingUser.Password.toString();

      bcrypt.compare(loginPassword, storedPassword, (err, result) => {
        if (err) {
          throw new Error("Something went wrong");
        }
        if (result === true) {
          res.status(202).json(existingUser);
        } else {
          return res.status(401).json({ error: "Password does not match" });
        }
      });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
