import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element= {<Home></Home>}  ></Route>
            </Routes>
        </div>
    )
}

export default App;