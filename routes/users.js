const express = require("express");
const {
  createUser,
  verifyUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers
} = require("../controllers/user");


const router = express.Router();

// create a user
router.post("/register", createUser);

router.post("/login", verifyUser);

// get all users
router.get("/", getUsers);

// get a user
router.get("/:id", getUser);

// update a user
router.put("/:id", updateUser);

// delete a user
router.delete("/:id", deleteUser);



module.exports = router;