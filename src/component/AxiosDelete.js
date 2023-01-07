import React, { useEffect, useState } from "react";
import axios from "axios";
const baseurl = "https://jsonplaceholder.typicode.com/posts"
function AxiosDelete() {
    const [post, setPost] = useState(null)
    useEffect(() => {
        axios.get((baseurl + "/7")).then((res) => {
            setPost(res.data)
        })
    }, [])
    function deletepost(){
        axios.delete((baseurl+"/7")).then(()=>{
            alert("post deleted")
            setPost(null)
        })
    }
    return (
        <div>
            <h1>{post && post.title}</h1>
            <button onClick={deletepost}>Delete post</button>
            <p>{post && post.body}</p>
        </div>
    )
}
export default AxiosDelete