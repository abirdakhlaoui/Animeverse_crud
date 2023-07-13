const express=require("express")
const cors=require("cors")

//IMPORT CONTROLLERS
const categoriesController = require("./controllers/categoriesController")
const messagesController = require("./controllers/messagesController")
const ordersController = require("./controllers/ordersController")
const productsController = require("./controllers/productsController")
const sellerController = require("./controllers/sellerController")
const subcategoryController = require("./controllers/subcategoryController")
const usersController = require("./controllers/usersController")



require("./config/db")
const app=express()
const port=3001


app.use(cors())
app.use(express.json())

// ROUTING
app.use("/categories", categoriesController)
app.use("/products", productsController)
app.use("/orders", ordersController)
app.use("/subcategories", subcategoryController)
app.use("/messages", messagesController)
app.use("/users", usersController)
app.use("/sellers", sellerController)


app.listen(port, () => console.log(`🟢 server started on port ${port}`))