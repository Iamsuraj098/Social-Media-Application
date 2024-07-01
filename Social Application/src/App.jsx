import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Register from './Register/Register.jsx'
import Login from "./Login/Login"
import LeftBar from './Component/LeftBar/LeftBar.jsx';
import RightBar from './Component/RightBar/RightBar.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Profile from './Profile/Profile.jsx';

export default function App() {

    const currentUser = false;
    const Layout = () => {
        return (
            <div>
                <Navbar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <Outlet />
                    <RightBar />
                </div>
            </div>
        );
    };

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }
        return children;
    }
    const router = createBrowserRouter([
        {
            path: "/",
            // element: <ProtectedRoute><Layout /></ProtectedRoute>,
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/profile/:id",
                    element: <Profile />
                }
            ]
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    return (
        <RouterProvider router={router} />
        // <Navbar/>
    )
}
// <BrowserRouter>
//     <App/>
// </BrowserRouter>
// import { BrowserRouter } from 'react-router-dom'
// import Register from './Register/Register.jsx'
// import Login from './Login/Login.jsx'