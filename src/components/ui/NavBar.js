import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login', { replace: true });
        dispatch({
            type: types.logout
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Asociaciones</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/marvel">Marvel</Link>
                        <Link className="nav-link" to="/dc">DC</Link>
                        <Link className="nav-link" to="/search">Search</Link>
                    </div>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-info">
                        {name}
                    </span>
                    <button
                        className="nav-link nav-item btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}