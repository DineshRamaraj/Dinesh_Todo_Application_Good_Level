const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const LoginUser = async (req, res) => {
  const { userDetails } = req.body;
  const { emailId, password } = userDetails;
  try {
    const existUser = await UserModel.findOne({ email_id: emailId });

    if (!existUser) {
      return res
        .status(404)
        .json({ status: "failure", message: "User Not Found" });
    }

    const checkPassword = await bcrypt.compare(password, existUser.password);
    // console.log(checkPassword);

    if (!checkPassword) {
      return res
        .status(401)
        .json({ status: "failure", message: "Invalid Password" });
    }
    const payload = {
      user_id: existUser._id,
      username: existUser.name,
    };
    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    return res.status(200).json({
      status: "success",
      message: "Login Success",
      jwt_token: jwtToken,
    });
  } catch (error) {
    return res.status(500).json({ status: "failure", message: error.message });
  }
};

module.exports = LoginUser;
