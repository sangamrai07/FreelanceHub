const express = require("express");
const {createGig,deleteGig,getAllGigs,getSingleGig} = require("../controllers/gig.controller.js");
const verifyToken = require("../utilities/jwtoken.js");

const router = express.Router();

router.post("/",verifyToken,createGig)
router.delete("/:id", verifyToken, deleteGig)
router.get("/", getAllGigs)
router.get("/singleGig/:id", getSingleGig)

module.exports = router;