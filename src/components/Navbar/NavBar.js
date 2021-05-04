import React, { useState, useContext } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import AccountHeader from '../AccountHeader/index'
import './navbar.css';
import {AccountNum} from '../../pages/Profile/Profile';
import UserContext from '../../components/User/user';
import {JFCBalanceBlack} from '../../balance'
import Avatar from 'react-avatar';
function Navbar() {
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
    const {activateBrowserWallet, account,deactivate} = useContext(UserContext);
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);
   
        
    return (
    <>
    <div className="navbar">
        {/* <Avatar size="55" name={account} round={true}/> */}
        {/* <AccountNum >{account}</AccountNum> */}
        <Link to='#' className='menu-bars'>
             <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        
    </div>
    
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            
            <li className='navbar-toggle'>
                <Link to='#' className='close-bars'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link> 
            </li>
            <JFCBalanceBlack/> 
            {SidebarData.map((item,index) => {
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}  

             
        </ul>
       
    </nav>
    
    </>
    )
}

export default Navbar;