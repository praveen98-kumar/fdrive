import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.get('/healthcheck', (_, res) => {
  return res.status(200).json({success: true})
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
