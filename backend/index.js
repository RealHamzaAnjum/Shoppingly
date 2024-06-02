const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// connection
mongoose.connect("mongodb://localhost:27017/e-comm");

app.get("/", (req, res) => {
  res.send("express running");
});

// Image storage configuration
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("images"), (req, res) => {
  res.json({
    success: 1,
    Image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;

  const product = new Product({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  await product.save();
  res.json({ success: true, name: req.body.name });
});

app.delete("/removeproduct/:id", async (req, res) => {
  const result = await Product.findOneAndDelete({ _id: req.params.id });
  res.send(result);
});

// allproduct fetch
app.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  console.log("allfetch");

  res.send(products);
});

///api for update value by id
app.get("/product/:id", async (req, reqs) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    reqs.send(result);
  } else {
    reqs.send({ result: "record not there" });
  }
});
////update database data by id
app.put("/product/:id", async (req, resp) => {
  let result = await Product.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

// ////////Schema for User Model//
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// ///////Register the user///
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, error: "User already exist with same email" });
  }
  // this will create empty cart where 300 keys can be generated
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  // JWT authantication//
  const data = {
    user: {
      id: user.id,
    },
  };
  // create token//
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

////user LOgin api if password is correct then generate token otherwise errors
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });

  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "wrong password" });
    }
  } else {
    res.json({ success: false, errors: "wrong email id" });
  }
});

// new collection data//
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("newfetch");
  res.send(newcollection);
});

// popular in women category
app.get("/womwnpopular", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let womenpopular = products.slice(0, 4);
  res.send(womenpopular);
});
///////midleware to fetch user productid
const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ errors: "No token, authorization denied" });
  }
  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).send({ errors: "validate with authentic token" });
  }
};
// save cart product in mongodb
app.post("/addtocart", fetchuser, async (req, res) => {
  try {
    console.log("added", req.body.itemId);

    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send("User not found");
    } else {
      userData.cartData[req.body.itemId] += 1;
    }

    await Users.findByIdAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData },
      { new: true }
    );

    res.status(200).json({ cartData: userData.cartData });
  } catch (error) {
    console.error("Error in addtocart:", error); 
    res.status(500).send("Server Error");
  }
});

// api for remove product from cart data
app.post("/removecart", fetchuser, async (req, res) => {
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });

  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;

  await Users.findByIdAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData },
    { new: true }
  );

  res.status(200).json({ cartData: userData.cartData }, "removed");
});

// /api for get cart value
app.post("/getcart", fetchuser, async (req, res) => {
  console.log("get cart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});





// Order Schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  postalCode: String,
  country: String,
});

const Order = mongoose.model('Order', orderSchema);


// Fetch user details endpoint
app.get("/userinfo", fetchuser, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});


// API Endpoint to Create Order
app.post('/placeorder', async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Fetch all orders endpoint
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});






app.listen(port, (error) => {
  if (!error) {
    console.log("running :" + port);
  } else {
    console.log("error :" + error);
  }
});
