const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("GET for posts");
})
router.get("/:id", (req, res)=>{
    res.send("GET for post id");
});
router.post("/", (req, res)=>{
    res.send("POST for post");
});
router.delete("/:id", (req, res)=>{
    res.send("Delete for post id");
});

module.exports = router;