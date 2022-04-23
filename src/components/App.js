import React, {Suspense, lazy} from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';

const HomeView = lazy(() => import ('../views/HomeView'));
const BuyCarsView = lazy(() => import ('../views/BuyCarsView'));
const ProfileView = lazy(() => import ('../views/ProfileView'));
const CompanyView = lazy(() => import ('../views/CompanyView'));
const CarDetailsView = lazy(() => import ('../views/CarDetailsView'));
const RecommendationView = lazy(() => import ('../views/RecommendationView'));
const ChosenView = lazy(() => import ('../views/ChosenView'));

const App = () => {
    const token = useSelector((state) => state.auth.user.token);

    return (
        <div>
            <Suspense fallback={<p>Загрузка...</p>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomeView />}/>
                        <Route path="/autos" element={<BuyCarsView />} />
                        <Route path="/autos/:id" element={<CarDetailsView />} />
                        <Route path="/company" element={<CompanyView />} />
                        <Route path="/profile" element={token ? <ProfileView /> : <Navigate replace to='/' />} />
                        <Route path="/recommendation" element={token ? <RecommendationView /> : <Navigate replace to='/'/>} />
                        <Route path="/recommendation/:id" element={<CarDetailsView />} />
                        <Route path="/chosen" element={token ? <ChosenView /> : <Navigate replace to='/'/>} />
                        <Route path="/chosen/:id" element={<CarDetailsView />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;