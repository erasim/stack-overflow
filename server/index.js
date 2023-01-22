import expess from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'
const app =expess()
app.use(expess.json({limit:"30mb", extended:true }))
app.use(expess.urlencoded({limit:"30mb", extended:true }))
app.use(cors());

app.get('/', (req, res)=>{
  res.send("this is the stack overflow api ")
})
app.use('/user', userRoutes)
// app.use('/user/*', (req, res)=>{  res.send("this is the stack overflow api ")})
const PORT = process.env.PORT || 5000

const CONNECTION_URL ="mongodb+srv://admin:admin@stack-overflow-clone.3mscsti.mongodb.net/stack-overflow-clone?retryWrites=true&w=majority" 
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>{console.log(`Server is running port ${PORT}`)}))
.catch((err)=>console.log(err.massage))