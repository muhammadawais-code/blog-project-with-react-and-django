
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { usePostContext } from "./contextApi/useContext";

function Post ({post}) {
    return (
    <>
        <header className="gradient-bg text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Post Details</h1>
                    <Link to={"/"} className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center">
                        <i className="fas fa-arrow-left mr-2"></i> Back to Posts
                    </Link>
                </div>
            </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <article className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={post.image} alt="Post image" className="w-full h-64 md:h-80 object-cover" />
                
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
                            <p className="text-xl text-purple-600 font-medium">{post.subheading}</p>
                        </div>
                        <Link to={`/posts/update-post/${post.id}`} state ={{post: post}} className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-200 transition duration-300 flex items-center">
                            <i className="fas fa-edit mr-2"></i> Edit
                        </Link>
                    </div>

                    <div className="flex items-center text-gray-500 mb-8">
                        <div className="flex items-center mr-6">
                            <i className="far fa-calendar-alt mr-2"></i>
                            <span>Published on {post.created}</span>
                        </div>
                        <div className="flex items-center">
                            <i className="far fa-clock mr-2"></i>
                            <span>5 min read</span>
                        </div>
                    </div>

                    <div className="markdown-content">
                        <ReactMarkdown>{post.description}</ReactMarkdown>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <button className="text-gray-500 hover:text-purple-600">
                                <i className="far fa-thumbs-up"></i> <span className="ml-1">42</span>
                            </button>
                            <button className="text-gray-500 hover:text-purple-600">
                                <i className="far fa-comment"></i> <span className="ml-1">8</span>
                            </button>
                        </div>
                        <div className="flex space-x-2">
                            <button className="text-gray-500 hover:text-blue-500">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-github"></i>
                            </button>
                            <button className="text-gray-500 hover:text-blue-700">
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
                <p>© 2023 Blog Posts. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-purple-400"><i className="fab fa-github"></i></a>
                    <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </footer>

    </>

    )
}


function PostDiv () {
    const {posts,fetchPosts} = usePostContext();


    const handleDelete = (id) => {
        const deleteCheck = confirm("Do you want really delete post.")
        if (deleteCheck){
            fetch(`http://localhost:8000/api/posts/${id}/`,{
                method : "DELETE",
            })
            .then(() => fetchPosts())
            .catch(error => {
                console.log(error.message)
            })
        }
    }

    return (
        <>
            {posts.map((p) => {
                
            return (
                    
                <div className="post-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
                    <img src={`${p.image}`} alt="Post image" className="w-full h-48 object-cover" />
                        {console.log(p.image)}
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{p.title}</h2>
                            <div className="flex space-x-2">
                                <Link to={`/posts/update-post/${p.id}`} className="text-blue-500 hover:text-blue-700">
                                    <i className="fas fa-edit"></i>
                                </Link>
                                <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:text-red-700">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">{p.subheading}</p>
                        <Link to={`/posts/${p.id}`} state={{post : p}} key={p.id} className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                            Read more <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>
                </div>
            )
            })}
        </>
    )
}

export {Post, PostDiv};