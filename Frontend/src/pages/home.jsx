import { useEffect } from 'react';
import { usePostContext } from '../components/contextApi/useContext';
import { PostDiv } from '../components/post';
import "../styles/style.css"
import "../App.css";
import { Link } from 'react-router-dom';

export default function Home() {

    const {loading,fetchPosts} = usePostContext();
    useEffect (() =>{
        fetchPosts();

    },[])

    return (
        <>

        <header className="gradient-bg text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Blog Posts</h1>
                    <Link to={'/posts/create-post'} className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center">
                        <i className="fas fa-plus mr-2"></i> New Post
                    </Link>
                </div>
            </div>
        </header>

        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             
            {loading ? 
            (<p>Posts are loading....</p>)
            : ( <PostDiv/>)
            }

            </div>
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
