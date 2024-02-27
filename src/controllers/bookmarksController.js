const data = require("../constants");

// get bookmarks
const getBookmarks = (req, res) => {
  return res.status(200).json({
    data,
  });
};

// create bookmark
const createBookmark = (req, res) => {
    const {title, url} = req.body
    const id = data.length + 1

    const newBookmark = {
      id,
      title,
      url,
    };

    data.push(newBookmark);

    return res.status(201).json({
        message: "Bookmark created successfully",
        data
    })
   
}

module.exports = { getBookmarks, createBookmark };
