import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItens } from './MenuItens';
import './Navbar.css';

class Navbar extends Component {

    state = { clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return (
            <nav className="NavbarItens">
                <h1 className="navbar-logo">JetGo</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
                {MenuItens.map((item, index) => (
                    <li key={index}>
                    <Link className={item.cName} to={item.url}>
                        <i className={item.icon}>
                        </i>{item.title}
                    </Link>
                    </li>
                ))}
                <button>Sign Up</button>
                </ul>
            </nav>
        );
    };
}

export default Navbar;
