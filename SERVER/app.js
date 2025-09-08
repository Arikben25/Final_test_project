import express, { json } from "express"
import {config} from "dotenv"
import cors from "cors"
import configRoutings from "./routings/config.js"

config()

const app = express()
const port =process.env.port||5000

app.use(cors())
app.use(express.json())
app.use(express.static('public')); 


configRoutings(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
