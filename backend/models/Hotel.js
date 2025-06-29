const mongoose=require("mongoose");
const connectDB=require("../db");

connectDB();



const hotelSchema= new mongoose.Schema({
    name:String,
    city:String,
    address:String,
    email:{type:String, unique:true},
    phone:String,
    price_day:Number,
    imageUrl: String,
    services:{
        breakfast: { type: Boolean, default:true },
        lunch: { type: Boolean, default:true },
        dinner: { type: Boolean, default:true },
        parking: { type: Boolean, default:true },
        wifi: { type: Boolean, default:true },
        tv: { type: Boolean, default:true }
        }
    },{
        timestamps:true
});

const Hotel=mongoose.model('Hotel',hotelSchema);
module.exports=Hotel;


// Hotel.deleteMany({});

// //adding data here

// const insertHotels= async()=>{

     


//     const hotels=[{
//         name:"Revatii",
//         city:"Pune",
//         address:" MG Road ",
//         email: "paradise@hotel.com",
//         phone: "1234567890",
//         price_day: 2000,
//         imageUrl: "/images/img1.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"Antella",
//         city:"Mumbai",
//         address:" juhu side ",
//         email: "antellae@hotel.com",
//         phone: "1234567890",
//         price_day: 2000,
//         imageUrl: "/images/img2.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"Sanfr",
//         city:"Bengluru",
//         address:" sarsad nagar ",
//         email: "sanfr@hotel.com",
//         phone: "1234567890",
//         price_day: 3000,
//         imageUrl: "/images/img3.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"DOPOLI",
//         city:"dapoli",
//         address:" main dapoli",
//         email: "dapoli@hotel.com",
//         phone: "1234567890",
//         price_day: 1500,
//         imageUrl: "/images/img4.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"Manas",
//         city:"manali",
//         address:" srinagar road ",
//         email: "manas@hotel.com",
//         phone: "1234567890",
//         price_day: 1499,
//         imageUrl: "/images/img5.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"Shrivas",
//         city:"Uttarakhand",
//         address:" sarsard nagar ",
//         email: "shrivas@hotel.com",
//         phone: "1234567890",
//         price_day: 2500,
//         imageUrl: "/images/img6.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"Noble",
//         city:"Assam",
//         address:" dehede area ",
//         email: "noble@hotel.com",
//         phone: "1234567890",
//         price_day: 1500,
//         imageUrl: "/images/img7.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"The Oberoi",
//         city:"New Delhi",
//         address:" MG Road ",
//         email: "theoberoi@hotel.com",
//         phone: "1234567890",
//         price_day: 1500,
//         imageUrl: "/images/img8.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     },{
//         name:"Conrad",
//         city:"Bengaluru",
//         address:" Mkr Road ",
//         email: "conrad@hotel.com",
//         phone: "1234567890",
//         price_day: 1500,
//         imageUrl: "/images/img9.avif", 
//         services: {
//             breakfast: true,
//             lunch: false,
//             dinner: true,
//             parking: true,
//             wifi: true,
//             tv: true
//         }
//     }
//     ]




//     try {
//     await Hotel.insertMany(hotels);
//     console.log("✅ Hotels inserted successfully");
//   } catch (err) {
//     console.error("❌ Error inserting hotels:", err.message);
//   } finally {
//     mongoose.disconnect(); 
//   }

// };

// insertHotels();