const bcrypt = require("bcrypt");
const {
  createUser,
  getUserByUsername,
  getUserByToken,
} = require("../db/helpers/users");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { token } = require("morgan");

const router = require("express").Router();

const SALT_ROUNDS = 10;

router.get("/", async (req, res, next) => {
  try {
    res.send("WOW! A thing!");
  } catch (error) {
    next(error);
  }
});

router.get("/me", async (req, res, next) => {
  try {
    const response = await jwt.verify(req.headers.authorization, JWT_SECRET);
    const user = await getUserByToken(response.id);
    if (!user) {
      throw "not a user";
    }
    delete user.password;
    res.send({ user, ok: true });
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body, JWT_SECRET);
    const { username, password } = req.body;
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    //sending username and hashed pw to database
    const user = await createUser({ username, password: hashedPassword });
    //removing password from user object for security reasons
    delete user.password;

    //creating our token
    const token = jwt.sign(user, JWT_SECRET);

    //attaching a cookie to our response using the token that we created
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    delete user.password;
    // console.log(res)

    res.send({ user, ok: true, token });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
    console.log(user);

    const validPassword = await bcrypt.compare(password, user.password);

    delete user.password;
    if (validPassword) {
      //creating our token
      const token = jwt.sign(user, JWT_SECRET);
      //attaching a cookie to our response using the token that we created
      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete user.password;
      res.send({ user, ok: true, token });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
