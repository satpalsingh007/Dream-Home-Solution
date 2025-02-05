import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "./components/Header";
import Homepage from "./components/Hompage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

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
        ]
    }
]);

// Rendering the router to the DOM
const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <RouterProvider router={appRouter} /> // Use RouterProvider to handle routing
);
