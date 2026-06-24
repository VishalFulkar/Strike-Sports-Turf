const mongoose = require("mongoose");

const turfSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    mapUrl: {
        type: String, // Google Maps link
    },
    description: {
        type: String
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    openTime: {
        type: String,
        required: true
    },
    closeTime: {
        type: String,
        required: true
    },
    slotDuration: {
        type: Number,
        default: 60
    },
    sports: [{
        type: String,
        enum: ["Football", "Cricket", "Other"],
        required: true
    }],
    images: [{
        type: String
    }],
    contactNumber: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

const turfModel = mongoose.model("Turf", turfSchema);
module.exports = turfModel;
