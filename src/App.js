import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Homepage from "./components/Hompage"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"


const App = ()=>{
    return(
        <div>
            <Header/>
            <Homepage/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(<App/>);