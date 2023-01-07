import React, { useState ,useEffect} from "react";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/po"

function AxiosErrorHandling(){
    const [post, setPost] = useState(null)
    const[error,setError]=useState(null)
    useEffect(() => {
        axios.get(baseUrl).then((res) => {
            setPost(res.data)
        }).catch((err)=>{
            setError(err)
        })
    }, [])
    return (
        <div>
            <h2>{error&& error.message}</h2>
            <h4>{post && post[7].title}</h4>
            <p>{post && post[7].body}</p>
        </div>
    )
}
export default AxiosErrorHandling