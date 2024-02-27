const express = require('express')
const {
  getBookmarks,
  createBookmark,
} = require("../controllers/bookmarksController");



const router = express.Router()

// all methods on books
router.get("/", getBookmarks )

// creating a bookmark
router.post("/", createBookmark)


module.exports = router