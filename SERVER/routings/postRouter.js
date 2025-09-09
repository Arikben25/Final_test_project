import exports from "express"
import {pullAllPosts ,addPost} from "../controllers/postsControler.js"

const Router = exports.Router()

Router.get("/getAllPosts" ,pullAllPosts)
// Router.get("/getOnePost/:id")
Router.post("/addPost", addPost)
// Router.put("/updatePost")

export default Router
