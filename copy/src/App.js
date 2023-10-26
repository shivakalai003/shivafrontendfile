import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Landpage from "./pages/LandPage";

import Homepage from "./pages/HomePage";

import Moviepage from "./pages/Movies/MoviePage";

import Navbar from "./Components/Navbar/Navbar";

import RootLayout from "./Components/Layout";

import Errorcomponent from "./Components/ErrorComponents";

import Products from "./pages/Products";

import Searchpage from "./pages/Movies/Searchpage";

import Moviecard from "./pages/Movies/Moviecard";

import ViewMovie from "./pages/Movies/ViewMovie";

import UserModulelayout from "./pages/User/UserModulelayout";

import SignUp from "./pages/User/signUp";
import Login from "./pages/User/login";
import Allusers from "./pages/User/allusers";
import Updateuser from "./pages/User/updateuser";
import Classcomponent from "./Components/shared/classcomponet";
import { checkAuthloder } from "./utill/checkauthloder";


function App() {

    const routes = createBrowserRouter([
        {
            path: "/", element: <RootLayout />,
            errorElement: <Errorcomponent />,

            children: [

                { path: "/", element: <Landpage /> },

                { path: "Home", element: <Homepage />,
                loader:checkAuthloder,
            
            },

                {
                    path: "Movie", element: <Moviepage />, children: [{ path: "Search", element: <Searchpage /> },

                    { path: ":movieName/:movieId", element: <ViewMovie /> },],
                },

                { path: "Products", element: <Products /> },

                { path: "user", element: <UserModulelayout />, children: [
                { path: "", element: <Allusers/> },
                
                { path: "update-user/:userId", element: <Updateuser /> },

               
            ],
           },
           { path: "signup", element: <SignUp /> },
          { path: "login", element: <Login /> },
           
           {
            path:"class",element:<Classcomponent/>
           }           
         ],
         },
        
        ]);

    return (

        <RouterProvider router={routes} />

    );
}

export default App;