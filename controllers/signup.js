const SignupTable = require("../models/signup");

exports.signupHandler = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    const existingUser = await SignupTable.findOne({ where: { Email } });

    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const signup = await SignupTable.create({
      Name,
      Email,
      Password,
    });
    res.status(201).json(signup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
