require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const crownRoutes = require("./routes/crownRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/crowns", crownRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" MongoDB connected"))
.catch(err => console.error(" MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
