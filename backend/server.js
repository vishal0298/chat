import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import authRouter from './routes/authRoutes.js'
import { default as mongoose } from 'mongoose';
dotenv.config()

const app = express();
// Mongo DB Connections
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});


// Middleware Connections
app.use(cors())
app.use(json())

// Routes
app.use('/api/auth', authRouter)



// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})