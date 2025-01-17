import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Homepage from "./components/Hompage"
import ContactUs from "./components/ContactUs"


const App = ()=>{
    return(
        <div>
            <Header/>
            <Homepage/>
            <ContactUs/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(<App/>);