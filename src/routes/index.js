import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";

const AppRoutes = () => {
    return <Router>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/upload' element={<Upload />} />
        </Routes>
    </Router>
}

export default AppRoutes
