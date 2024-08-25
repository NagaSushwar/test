const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/bfhl", apiController.getOperationCode);
router.post("/bfhl", apiController.processRequest);

module.exports = router;
