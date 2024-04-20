import React from 'react'
import { Link } from 'react-router-dom'

export default function Navabar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" href="#">
                        Full Stack API
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Link className="btn btn-outline-light" to={"/addUse"}>Add User</Link>
                </div>
            </nav>

        </>
    )
}
