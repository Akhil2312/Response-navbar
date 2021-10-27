import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import logo from '../LOGO/brand-logo2.PNG';
import './Navbar.css';
import {Link} from 'react-router-dom';



class Navbar extends Component {
    state = {clicked : false};

    handleClick = ()=> this.setState({clicked: !this.state.clicked});

    
    render() {
        return (
            <nav className='NavbarItems'>
              <Link to='/' className='brandlink'><img className="navbar-logo" src={logo} alt='MMAKZ' height={150} width={150}/></Link>
              
              <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                  {MenuItems.map((items,index)=>{
                      return(
                          <Link to={items.url} className={items.cName} key={index}>
                                <li>
                                    {items.title}
                                </li>
                          </Link>
                      )
                  })}
              </ul>
                  <div className="icons">
              <i className="fas fa-shopping-cart"></i>

              <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked? 'fas fa-times ' : 'fas fa-bars '}></i><sup>{this.state.products}</sup></div>

              </div>
            </nav>
        )
    }
}

export default Navbar
