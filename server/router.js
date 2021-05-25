const authController = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });
module.exports = function (app) {
  app.get("/posts", requireAuth, (req, res) => {
    res.send("hello world?");
  });
  app.post("/signin", requireSignIn, authController.signin);
  app.post("/signup", authController.signup);
};
