import mongoose from 'mongoose';

export default async function connectToDB() {
    if (mongoose.connection.readyState >= 1) {
        console.log('Already Connected');
        return;
    }

    try {
        await mongoose.connect("mongodb+srv://harshrpanwar:6sf31YJ1qDFBjPcH@cluster0.d2bkqyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            ssl: true
        });
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error);
        throw error;
    }
}