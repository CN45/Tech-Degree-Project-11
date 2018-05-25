import React from 'react';

import { Link } from 'react-router-dom';
//The <Link> component allows you to navigate between pages without reloading the whole app


const Nav = () => {

        return (
            <div>
                <nav className="main-nav">

                    <ul>
                        <li>
                            <Link to="/cats">Cats</Link>
                        </li>
                        <li>
                            <Link to="/dogs">Dogs</Link>
                        </li>
                        <li>
                            <Link to="/sunsets">Sunsets</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
}

export default Nav;
