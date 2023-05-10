import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul className='left'>
                <li><Link to='/'> ShadaiKhana</Link></li>
            </ul>

            <ul className='right'>
                <li>
                    <Link to='/cart'>
                        <span className='shopping-cart'>
                        <i class="fa-solid fa-cart-plus"></i>
                        <span className='cart-count'>
                            0

                        </span>
                        </span>
                    </Link>
                </li>

            </ul>

        </nav>
    );
};

export default NavBar;