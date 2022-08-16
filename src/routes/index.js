import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";

const AppRoutes = () => {
    return <HashRouter>
        <Routes>
            <Route path='/' element={Home} />
            <Route path='/upload' element={Upload} />
        </Routes>
    </HashRouter>
}

export default AppRoutes
