import express from 'express'
import categortRoutes from './routes/category.routes.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/categories',categortRoutes)

app.use(errorHandler)
export default app;