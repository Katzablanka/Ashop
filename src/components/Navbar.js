import React, { Component } from 'react'
import logo from '../images/logo0.png'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {FaRegBookmark} from 'react-icons/fa';

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen});
    }
    render() {
        return (
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                    <Link to='/'>
                        <img src={logo} alt="Beach resort" />
                    </Link>
                    <button type='button' className='nav-btn' onClick={this.handleToggle}>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                    </div> 
                
                    <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
                        <li>
                            <Link to='/' onClick={this.handleToggle}>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms' onClick={this.handleToggle}>Rooms</Link>
                        </li>
                      
                         <li>
                            <Link to='/card' onClick={this.handleToggle}><FaRegBookmark className='nav-card-icon'/></Link>
                        </li>
                             
                                  
                           
                        

                    </ul> 
                     
                    
                </div>
            </nav>
        )
    }
}
