import {connect} from "../dbConfig/mongoDB.js"
const db = await connect()

// get all post from db
async function readAllPosts() {
     try{
       const data = await db.collection("posts").find().toArray()
        console.log(data);
        return data
    }catch(err){
        console.log(`your err is: ${err}`);
        throw new Error("Could not retrieve posts from the database")   
    }
}

// cost post to db
async function costPost(obj){
    try{
       const resolt = await db.collection("posts")
       .insertOne(obj)
       return resolt;
    }catch(err){
        console.error("yuor problme is: ",err)
        return err
    }
}

export{
    readAllPosts,
    costPost
}

