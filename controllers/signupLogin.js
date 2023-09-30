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

exports.loginHandler = async (req, res) => {
  const { loginEmail, loginPassword } = req.body;
  try {
    const existingUser = await SignupTable.findOne({
      where: { Email: loginEmail },
    });
    console.log("existingUserrrrrrrrrrrr", existingUser);
    if (!existingUser) {
      // User not found
      return res.status(404).json({ error: "User not found" });
    }

    const storedPassword = existingUser.Password.toString();

    // Check if the provided password matches the stored password
    if (storedPassword === loginPassword) {
      // Password matches, return success
      return res.status(202).json(existingUser);
    } else {
      // Password doesn't match
      return res.status(401).json({ error: "Password does not match" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
