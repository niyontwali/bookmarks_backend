const express = require('express')
const data = require("./constants")
const bookmarksRoutes = require("./routes/bookmarksRoutes")

// create an instance of express
const app = express() 

// use json method from the express
app.use(express.json())

// define home endpoint
app.get("/", (req, res) => {
    return res.status(200).json({
       message: 'Welcome to the bookmarks api'
    })
})

app.use("/bookmarks", bookmarksRoutes)

// define port and hostname
const port = 3000
const hostname = "127.0.0.1"

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
} )