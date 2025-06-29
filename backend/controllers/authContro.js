
const User = require("../models/User");
const Hotel=require("../models/Hotel");
const Booking=require("../models/Booking");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const JWT_SECRET="stayfinder";


//Users profile 
exports.Profile=async (req, res)=>{
  try {
    const profile=await User.findById(req.params.id);
    if(!profile){
      return res.status(404).json({error:"User cannot Found!!!"});
    }
    const bookings=await Booking.find({userId:req.params.id}).populate('hotelId');
    res.status(200).json({profile, bookings});
  } catch (err) {
    res.status(500).json({error:"Failed to fetch data"});
  }
};

//Register User

exports.registerUser = async (req, res) => {
try{
  const initUser=new User(req.body);
  initUser.password=await bcrypt.hash(initUser.password, 10);
  const newUser = new User(initUser);
  await newUser.save();
  console.log("Registered user:");
  res.status(201).json({ message: 'User registered successfully', userId: newUser._id ,userName: newUser.name });
}catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};


//Login user

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } 

    // if (!bcrypt.compare(password, user.password)) {
    //   return res.status(401).json({ message: 'Invalid credentials' });
    // }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }


    const token = jwt.sign({ userId: user._id, name: user.name }, JWT_SECRET, { expiresIn: '30m' });

    res.status(200).json({ message: 'Login successful',token , userId: user._id, userName: user.name });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



//Hotel List
exports.hotelList=async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
};


//Hotel Single Page
exports.Hotel_page= async (req, res)=>{

  try{
    const hotel=await Hotel.findById(req.params.id);
    if(!hotel){
      return res.status(404).json({error:"Hotel not found"});
    }
    res.status(200).json(hotel);
  } catch(err){
    res.status(500).json({error:"Failed to fetch data"});
  }
};

//Hotel Booking page/Form
exports.Booking=async(req, res)=>{
  try {
    const {hotelId, userId, checkin, checkout, guests, bill} = req.body.bookingDetails;
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }
    const bookingDetails = {
      hotelId: hotel._id,
      userId: userId,
      checkin: new Date(checkin),
      checkout: new Date(checkout),
      guests: guests,
      bill: bill
    };
    const booking = new Booking(bookingDetails);
    await booking.save();
    return res.status(201).json({ message: "Booking successful", booking });


  } catch (err) {
    console.log("Error fetching hotel : ", err);
    res.status(500).json({error:"Failed to fetch hotel data"});
  }
};


