import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from "../../firebase/firebase.utils";

import './header.styles.scss'


const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/games'>
                GAMES
            </Link>
            <Link className='option' to='/customers'>
                OTHER
            </Link>
        </div>

        {/*<button className="btn-medium btn-login">*/}
            {
                currentUser ?
                    <button className="btn-medium btn-login" onClick={() => auth.signOut()}>Logout</button>
                    :
                    <Link className="btn-medium btn-login" to='/signin'>Login</Link>
            }

        {/*</button>*/}
    </div>
)

export default Header;