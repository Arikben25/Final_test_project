

type PostProp = {
  key: string;
  userName: string;
  time: number;
  imageUrl: string;
  post: string;
};

export default async function createPost(props:PostProp) {
    try {
    const res = await fetch("http://localhost:3003/posts/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key:props.key,
        userName:props.userName,
        imageUrl:props.imageUrl,
        post:props.post
      }),
    });
    if (!res.ok) {
      let errorMsg = "Server responded with an error.";
      try {
        const errorData = await res.json();
        errorMsg = errorData.msg || errorMsg;
      } catch (err) {
        return {
          success: false,
          status: 500,
          error: "Server responded with an error.",
        };
      }
      return { success: false, status: res.status, error: errorMsg };
    }
    const data = await res.json();
    return { success: true, status: res.status, data };
  } catch (err) {
    console.error("Problem with connection:", err);
    return { success: false, status: 0, error: "Could not connect to server." };
  }
}


