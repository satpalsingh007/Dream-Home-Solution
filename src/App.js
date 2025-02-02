import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Homepage from "./components/Hompage"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import MovingText from "./components/MovingText"
import ServiceAvail from "./components/ServiceAvail"
import Testimonial from "./components/Testimonial"


const App = ()=>{
    return(
        <div>
            <ServiceAvail/>
            <Header/>
            <Homepage/>
            <MovingText/>
            <ContactUs/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(<App/>);