import React, { useEffect, useState } from "react";
import axios from "axios";
const baseurl = "https://jsonplaceholder.typicode.com/posts"
function AxiosPost() {
    const [post, setPost] = useState(null)
    useEffect(() => {
        axios.post((baseurl), {
            title: "post Axios",
            body: "this is data from post api"
        }).then((res) => {
            setPost(res.data)
        })
    }, [])
    return (
        <div>
            <h1>{post && post.title }</h1>
            <h2>{post&& post.id}</h2>
            <p>{post && post.body}</p>
        </div>
    )
}
export default AxiosPost