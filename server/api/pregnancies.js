const router = require("express").Router();
const { getPregnancyByUserId } = require("../db/helpers/pregnancy");
// GET- /api/pregnancies/:userId

router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const pregnancies = await getPregnancyByUserId(userId);
    res.send(pregnancies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
