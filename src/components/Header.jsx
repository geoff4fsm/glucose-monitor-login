import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {

    //     }
    // }

    render() {
        return (
            <div id = 'header'>
                <header>
                    <nav className="navbar-expand-md navbar-dark bg-dark">
                        <ul>
                            <li className="navbar-brand">
                                <Link to="/">Glucose Monitor App</Link>
                            </li>
                            <li className="navbar-brand">
                                <Link to="/createuser">Sign Up</Link>
                            </li>
                            <li className="navbar-brand">
                                <Link to="/checkuser">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header