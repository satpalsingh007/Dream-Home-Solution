import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "./components/Header";
import Homepage from "./components/Hompage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GalleryPage from "./components/GalleryPage";
import Blog from "./components/WindowsBlog";
import WindowsBlog from "./components/WindowsBlog";
import DoorsBlog from "./components/DoorsBlog";
import FloorBlog from "./components/FloorBlog";
import KitchenBlog from "./components/KitchenBlog";
import RoofBlog from "./components/RoofBlog";

// Main App component
const App = () => {
    return (
        <div>
            <Helmet>
                <title>Dream House Solutions</title>
                <meta name="description" content="Dream House Solutions" />
                <meta name="keywords" content="housing solutions" />
            </Helmet>

            <Header />
            <Outlet /> {/* Child routes will render here */}
            <Footer />
        </div>
    );
};

// Defining the router with children routes
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />, // This is the main layout component
        children: [
            { path: "/", element: <Homepage /> },
            { path: "contact-us", element: <ContactUs /> },
            { path: "about-us", element: <AboutUs /> },
            { path: "gallery", element: <GalleryPage /> },
            { path: "windows-blog", element: <WindowsBlog /> },
            { path: "doors-blog", element: <DoorsBlog /> },
            { path: "floor-blog", element: <FloorBlog /> },
            { path: "kitchen-blog", element: <KitchenBlog/> },
            { path: "roof-blog", element: <RoofBlog/> },
        ]
    }
]);

// Rendering the router to the DOM
const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <RouterProvider router={appRouter} /> // Use RouterProvider to handle routing
);
