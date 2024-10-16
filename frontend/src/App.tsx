import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/authPages/Signup";
import Signin from "./pages/authPages/Signin";
import Blog from "./pages/mainPages/Blog";
import Blogs from "./pages/mainPages/Blogs";
import Home from "./pages/mainPages/Home";
import Profile from "./pages/mainPages/Profile";
import NewBlogPage from "./pages/mainPages/NewBlogPage";
import ForgetPass from "./pages/authPages/ForgetPass";
import UserProfile from "./pages/mainPages/AnyUserProfile";
import HomeMainPage from "./pages/mainPages/HomeMainPage";
function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/new-blog" element={<NewBlogPage/>}/>
      <Route path="/forgetpassword" element={<ForgetPass/>} />
      <Route path="/profile/:id" element={<UserProfile/>} />
      <Route path="/home" element={<HomeMainPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
