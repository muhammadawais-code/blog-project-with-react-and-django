
import { useLocation,useNavigate,useParams } from "react-router-dom";
import { Post } from "../components/post";
import { usePostContext } from "../components/contextApi/useContext";


function PostDetail () {
    const {posts,fetchPosts} = usePostContext();
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();

    const post = location.state?.post || posts.find((p) => p.id === parseInt(id));
    
    const deletePost = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this post??");
    
        if (isConfirmed){
            fetch(`http://localhost:8000/api/posts/${post.id}/`, {
                method : "DELETE",
            })
            .then(Response => Response.json())
            .then(data => console.log(data))
            .catch(error => error.message)
            fetchPosts();

            navigate("/");
        }
      }

    return (
        <>
        <Post post={post} posts={posts} deletePost={deletePost}/>
        </>
    )
}

export {PostDetail};