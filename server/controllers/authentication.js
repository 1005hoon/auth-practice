const User = require("../models/User");

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
  await user.save();

  // respond to request indicating the user was created
  res.status(201).json({
    success: true,
    data: user,
  });
};
