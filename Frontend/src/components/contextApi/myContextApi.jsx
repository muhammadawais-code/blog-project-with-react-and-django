import {useState, } from "react";
import { posts as p } from "../postData";
import {PostContext} from './createContext'



export const ContextProvider = ({children}) => {
    const [posts,setPosts] = useState(p);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetchPosts = () => {
      fetch ("http://localhost:8000/api/posts/")
      .then(response => {
        if (!response.ok){
          throw new error("Failed to Fetch Data");
        }
        return response.json()
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false)

      })
    }




    return (
        <PostContext.Provider value={{posts,setPosts,loading,setLoading,fetchPosts}} >
        {children}
        </PostContext.Provider>
    )

}

