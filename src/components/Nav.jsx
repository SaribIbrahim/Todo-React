import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    return (
        <>
            <div className="nav-wrapper">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand home" to={'/'}>Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link active add" aria-current="page" to={'/add'}>Add</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link active comp" aria-current="page" to={'/completed'}>Completed</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav