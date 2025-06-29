const mongoose = require('mongoose');

const bookingSchema=new mongoose.Schema({
    hotelId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    checkin:{
        type: Date,
        required: true
    },
    checkout:{
        type: Date,
        required: true
    },
    guests:{
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    bill:{
        type: Number,
        required: true
    }
    }, {  
    timestamps: true
    });

    const Booking = mongoose.model('Booking', bookingSchema);
    module.exports = Booking;
    