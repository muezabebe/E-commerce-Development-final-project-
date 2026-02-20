import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


const app= express()
const port =process.env.Port || 4000
connectDB()
connectCloudinary()

// Middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('Api working');
})


//app.listen(port, ()=> console.log('server started on port '+port ))

// Remove or wrap your app.listen:
if (process.env.NODE_ENV !== 'production') {
    app.listen(4000, () => console.log('Server running on 4000'));
}

// Ensure you export the app
export default app; // If using "type": "module"
// module.exports = app; // If using CommonJS (require)













