const express=require("express");
const {hotelList, Hotel_page, Booking}=require("../controllers/authContro");
const router=express.Router();

router.get("/",hotelList);
router.get("/:id/booking", Hotel_page);
router.post('/:id/booking', Booking);
router.get("/:id", Hotel_page);



module.exports=router;