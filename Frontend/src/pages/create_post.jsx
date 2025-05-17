import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../components/contextApi/useContext";
import { Link } from "react-router-dom";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";

function CreatePost () {
    const textareaRef = useRef(null);
    const editorInstance = useRef(null);

    useEffect(() => {
        if (editorInstance.current) return; // Prevent multiple instances
    
        if (textareaRef.current) {
            editorInstance.current = new EasyMDE({
                element: textareaRef.current,
                spellChecker: false,
                toolbar: [
                    "bold", "italic", "heading", "|", "quote",
                    "unordered-list", "ordered-list", "|",
                    "link", "image", "|",
                    "preview", "side-by-side", "fullscreen", "|", "guide"
                ],
                placeholder: "Write your post content here..."
            });
        }
    }, []);
    

    const navigate = useNavigate();
    const {fetchPosts} = usePostContext();

    const [title, setTitle] = useState("");
    const [subheading, setSubheading] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',title);
        formData.append('subheading',subheading);
        formData.append('image',selectedFile);

        const markdownContent = editorInstance.current?.value() || "";
        formData.append('description', markdownContent);

        fetch("http://localhost:8000/api/posts/",{
            method : "post",
            body : formData
        })
        .then(response => response.json())
        .then(data => {
            if (data){
                fetchPosts();
                navigate("/");
            }

        })
        .catch(error => alert(error.message))


    }



    return (
        <div>

        <header className="gradient-bg text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Create New Post</h1>
                <Link to ={"/"} className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center">
                    <i className="fas fa-arrow-left mr-2"></i> Back to Posts
                </Link>
            </div>
        </div>
    </header>

    <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Post Title</label>
                    <input type="text"  onChange={(e) => setTitle(e.target.value)} name="title" id="title" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter post title" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="subheading" className="block text-gray-700 font-medium mb-2">Subheading</label>
                    <input type="text" onChange={(e) => setSubheading(e.target.value)} name='subheading' id="subheading" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter a brief subheading" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Featured Image</label>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-2"></i>
                                <p className="mb-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
                            </div>
                            <input id="dropzone-file" onChange={handleFileChange} type="file" className="hidden" />
                        </label>
                    </div> 
                    {previewUrl && (
                        <div className="mt-4">
                            <label className="block text-gray-700 font-medium mb-2">Selected Image:</label>
                            <img
                                src={previewUrl}
                                alt="Selected Preview"
                                className="max-h-48 mx-auto rounded-md shadow-md"
                            />
                            <p className="text-center text-sm text-gray-600 mt-2">{selectedFile.name}</p>
                        </div>
                    )}
                </div>

                <div className="mb-6">
                    <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content (Markdown Supported)</label>
                    <textarea
                    id="content"
                    name="description"
                    ref={textareaRef}
                    className="sr-only"></textarea>

                </div>

                <div className="flex justify-end space-x-4">
                    <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-300">
                        Cancel
                    </button>
                    <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300 flex items-center">
                        <i className="fas fa-save mr-2"></i> Publish Post
                    </button>
                </div>
            </form>
        </div>
    </main>

    </div>
    )
}

export {CreatePost};