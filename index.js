const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());


const dbURI = "mongodb+srv://NICOLEESEKODY_db_user:stopPlayingwithem2026@CA1cluster.jpsvqsr.mongodb.net/?appName=CA1cluster";

mongoose.connect(dbURI)
  .then(() => console.log("✅ Success: Connected to MongoDB Atlas!"))
  .catch(err => console.log("❌ Connection Error:", err));


const userSchema = new mongoose.Schema({
  username: String,
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


app.post('/api/submit-form/login', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ statusCode: 200, msg: "User Saved to Database!" });
  } catch (err) {
    res.status(500).json({ msg: "Error saving data" });
  }
});


app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});