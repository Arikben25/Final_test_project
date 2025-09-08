import { readAllPosts, costPost } from "../dal/postService.js";
import { getTime } from "../utils/getTime.js";
const obj = {
  userName: "arik",
  time: "10:20",
  imageUrl: "",
  post: "The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: ",
};

//Control over req, res to the server and returning all posts
export async function pullAllPosts(req, res) {
  try {
    console.log(`pullAllPosts`);
    const data = await readAllPosts();
    if (!data || data.length === 0) {
      return res.status(404).json({ msg: `not found any post.` });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error("err is :", err);
    res.status(500).json({ msg: "Information unavailable. Try later." });
  }
}

// export async function pullOnePost(req, res) {
//   try {
//     const { name } = req.body;
//     if (!name) {
//       return res.status(400).json({ msg: "Please enter a username." });
//     }
//     const data = await readOnePlayer(name);
//     if (!data || data.length === 0) {
//       return res.status(404).json({ msg: `User ${name} not found.` });
//     }
//     return res.status(200).json(data);
//   } catch (err) {
//     console.error("err is : ", err);
//     res.status(500).json({ msg: "Information unavailable. Try later." });
//   }
// }

export async function addPost(req, res) {
  try {
    // const key = req.body.key;
    // req.body.time = getTime();
    const result = await costPost(req.body);
    return res.status(201).json(result);
  } catch (err) {
    console.error("the err is: ", err.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
}
