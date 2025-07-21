import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const captainSchema = new Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be atleast 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [5, 'Email must be atleast 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        },
        plate: {
            type: String,
            required: true,
            unique: true,
            minlength: [3, 'Plate must be atleast 3 characters long'],
        },
        color: {
            type: String,
            minlength: [3, 'Color must be atleast 3 characters long'],
            required: true
        },
        capacity: {
            type: Number,
            minlength: [1, 'Capacity must be atleast 1'],
            required: true
        }
    },
    location: {
        lat: Number,
        lon: Number
    }
}, { timestamps: true });

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this.id
    }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = model('Captain', captainSchema);
export default captainModel;