import React from 'react'
import {useSelector} from 'react-redux'


const Navbar = () => {
    const amount = useSelector(state => state.amount) //jo bhi state use karna hai wo use kar sakte hai. Amount ko pull kia useSelector ka use karke

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">State Bank of Tusshar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                    <div>
                        <button disabled = {true} className='btn-primary'>Your Balance {amount}</button> 
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
//jo amount hoga wo show hogaa
//theme change karne ka and kai sare redux bana sakte hai