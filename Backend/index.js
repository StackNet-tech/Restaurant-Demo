import express from "express";
import { PORT } from "./config.js";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());  
app.use(express.json());


mongoose.connect('mongodb+srv://piyuminadee25:12345678root@cluster0.z5bon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.log('Error connecting to MongoDB Atlas:', err);
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


app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
