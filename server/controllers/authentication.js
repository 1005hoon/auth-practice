const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  // Check if email exists
  const { email, password } = req.body;

  // validate user inputs
  if (!email || !password) {
    return res.status(422).json({
      success: false,
      data: "이메일 또는 비밀번호를 입력해주세요",
    });
  }

  // if user exists, return error
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(422).json({
      success: false,
      data: "이미 사용중인 이메일입니다",
    });
  }

  // if user doesn't exist, create and save user record
  const user = new User({ email, password });
  const token = generateToken(user);
  await user.save();

  // respond to request indicating the user was created
  res.status(201).json({
    success: true,
    token,
  });
};

exports.signin = async (req, res, next) => {
  const user = req.user;
  res.status(200).json({ success: true, token: generateToken(user) });
};

const generateToken = (user) => {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
};
