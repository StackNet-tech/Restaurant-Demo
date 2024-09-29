import express from "express";
import { PORT } from "./config.js";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
//const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bookingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    person: Number,
    timing: String,
    date: String,
  });
  
  const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/bookings', (req, res) => {
    const newBooking = new Booking(req.body);
    newBooking.save()
      .then(() => res.json('Booking added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

app.listen(PORT, ()=> {
    console.log(`App is listen  in ${PORT}`)
})