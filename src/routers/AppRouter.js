import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

/*

*/
export const AppRouter = () => {
    const { user } = useContext(AuthContext)
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="*" element={<PublicRoute isAuthenticated={user.logged} />}>
                        <Route path="login" element={<LoginScreen />} />
                    </Route>
                    <Route path="*" element={<PrivateRoute isAuthenticated={user.logged} />} >
                        <Route path="*" element={<DashboardRoutes />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}
