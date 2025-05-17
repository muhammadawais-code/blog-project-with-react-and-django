import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { CreatePost } from './pages/create_post';
import { PostDetail } from './pages/post_detail';
import { UpdatePost } from './pages/update_post';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home  />} />
        <Route path='/posts/create-post' element= {<CreatePost />} />
        <Route path='/posts/:id' element= {<PostDetail  />} />
        <Route path='/posts/update-post/:id' element= {<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
