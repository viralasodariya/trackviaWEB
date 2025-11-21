import {BrowserRouter,Routes,Route } from 'react-router-dom';

import Loading from '../pages/LoadingScreen';
import PricingPage from '../pages/PricingPage';
import Dashboard from '../pages/Dashboard';



export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Loading/>}/>
                <Route path='/pricing' element={<PricingPage/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}