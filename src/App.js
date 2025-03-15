import {BrowserRouter} from "react-router-dom";
import "./App.css";
import Layout from "./dashborad/Layout";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </div>
    );
}

export default App;
