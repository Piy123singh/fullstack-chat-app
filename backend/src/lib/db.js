import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${mongoose.connection.host}`); // Fix: Use mongoose.connection instead of connectDB.connection
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1); // Exit process with failure (recommended for critical DB failures)
    }
};