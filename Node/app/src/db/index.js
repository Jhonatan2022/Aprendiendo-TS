import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/app1')
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }
}