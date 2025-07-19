import mongoose from 'mongoose';

export default async function connectToDB() {
    if (mongoose.connection.readyState >= 1) {
        // Already connected or connecting
        return;
    }

    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error);
        throw error;
    }
}