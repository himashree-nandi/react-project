import React, { useEffect, useState } from "react";
import axios from "axios";
const baseurl = "https://jsonplaceholder.typicode.com/posts"
function AxiosPut() {
    const [post, setPost] = useState(null)
    useEffect(() => {
        axios.get((baseurl + "/7")).then((res) => {
            setPost(res.data)
        })
    }, [])
    function updatePost(){
        axios.put(baseurl+"/7",{
            title:"post axios",
            body:"data from put axios"
        }).then((res)=>{
            setPost(res.data)
        })
    }
    return (
        <div>
            <h1>{post && post.title}</h1>
            <button onClick={updatePost}>update post</button>
            <p>{post && post.body}</p>
        </div>
    )
}
export default AxiosPut