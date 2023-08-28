import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
            <div className="nav-content container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="main-menu collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href={{}} data-bs-toggle="dropdown"
                                id="navbarDropdownMenuLink" role="button" aria-expanded="false">Our Products</a>
                            <ul>
                                <li><a href={{}}>Products1</a></li>
                                <li><a href={{}}>Products1</a></li>
                                <li><a href={{}}>Products1</a></li>
                                <li><a href={{}}>Products1</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact Us</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    </>
  )
}
