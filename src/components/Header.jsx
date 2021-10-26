import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 


    class Header extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                
            }
        }

    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar-expand-md navbar-dark bg-dark">
                        <div className = "navbar-brand">
                            <Link to = "/">Glucose Monitor App</Link>
                        </div>
                        <div className = "navbar-brand">
                            <Link to = "/signup">Sign Up</Link>
                        </div>
                        <div className = "navbar-brand">
                            <Link to = "/login">Login</Link>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header