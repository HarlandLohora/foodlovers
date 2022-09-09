const router = require("express").Router();
const checkRole = require("../middleware/checkRole");
//MIddleware solo de admins :)

// function checkRole(req, res, next) {
//   console.log("el role es:", req.session.user.role);
//   if (req.session.user.role === "admin") {
//     next();
//   } else {
//     res.redirect("/");
//   }
// }

/* GET Dashboard */
router.get("/dashboard", checkRole, (req, res, next) => {
  res.render("admin/index");
});

module.exports = router;
