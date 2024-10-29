import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import NasaDate from '../Pages/NasaDate';
import NasaImages from '../Pages/NasaImages';
import NasaNeo from '../Pages/NasaNeo';
import Profile from '../Pages/Profile';


const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/NasaDate' element={<NasaDate/>} />
            <Route path='/NasaImages' element={<NasaImages/>} />
            <Route path='/NasaNeo' element={<NasaNeo/>} />
            <Route path='/Profile' element={<Profile/>} />
        </Routes>
    );
};

export default RoutesIndex;
