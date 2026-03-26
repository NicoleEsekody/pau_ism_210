const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const dbURI = "mongodb+srv://NICOLEESEKODY_db_user:stopPlayingwithem2026@CA1cluster.jpsvqsr.mongodb.net/?appName=CA1cluster";

mongoose.connect(dbURI)
  .then(() => console.log("✅ Success: Connected to MongoDB Atlas!"))
  .catch(err => console.log("❌ Connection Error:", err));

const catSchema = new mongoose.Schema({
  location: String,
  personality: [String]
});

const Cat = mongoose.model('Cat', catSchema);

app.get('/', (req, res) => {
  res.send("<h1>Cat App Backend is Live!</h1><p>Please use your HTML frontend to submit data to the database.</p>");
});

app.post('/api/submit-cat-form', async (req, res) => {
  try {
    const catData = {
      location: req.body['indoor-outdoor'],
      personality: req.body['personality']
    };

    const newCat = new Cat(catData);
    await newCat.save();
    
    res.status(200).send("<h1>Success!</h1><p>Your cat's personality has been saved to MongoDB Atlas.</p><a href='/'>Go Back</a>");
  } catch (err) {
    res.status(500).send("Error saving data to database.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});