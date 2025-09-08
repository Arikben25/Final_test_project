import Router from "./postRouter.js"

export default function configRoutings(app){
    app.use("/posts", Router )
    app.use((req, res)=>{
        res.status(404).json({msg:"not found"})
    })
}