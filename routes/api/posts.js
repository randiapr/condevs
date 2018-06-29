const express = require("express");
const router = express.Router();

router.get("/test", (req,res) => res.json({msg : "Test API posts OK!!!"}));

module.exports = router;

