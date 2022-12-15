import mongoose from "mongoose";



const URL = 'mongodb://localhost:27017/ecommerce'
await mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   serverSelectionTimeoutMS:5000
})
console.log('Base de datos conectada')
