import { Route, Routes } from 'react-router-dom';
import Login from '../Views/login';
import Home from '../Views/Home';


const NotFound = () => {
    return(
        <div>
            <h1>Not Found</h1>
        </div>
    )
}


const Router = () => {


    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router