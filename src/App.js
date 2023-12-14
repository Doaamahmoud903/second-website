import './App.css';
import '../src/Styles/global.css';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Paper from './Pages/Papers/Paper';
import AddBlog from './Pages/Blogs/AddBlog';
import AllServices from './Pages/services/AllServices';
import AddService from './Pages/services/AddService';
import EditProfile from './Pages/User/EditProfile';
import AllUsers from './Pages/User/AllUsers';
import Home from './Pages/Home/Home';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/paper' element={<Paper />}></Route>
      <Route path='/addblog' element={<AddBlog />}></Route>
      <Route path='/allservices' element={<AllServices />}></Route>
      <Route path='/addservice' element={<AddService />}></Route>
      <Route path='/editprofile' element={<EditProfile />}></Route>
      <Route path='/allusers' element={<AllUsers />}></Route>
  
    </Route>
  )
)
function Rootlayout(){
return(
  <>
<Outlet />
  </>
)
}

function App() {

  return (
      <RouterProvider router={router} />
  );
}



 
export default App;
