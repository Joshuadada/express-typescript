import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Express with TypeScript",
    author: "I am Josh",
  });
});

export default router;
