import React from 'react';
import {Link} from 'react-scroll';

function Header(props) {
    return (
        <div className="main-header">
            <div>
                <span className="main-header__brand">
                Beer Cycle
                </span>
            </div>
            <nav className="main-nav">
            <ul className="main-nav__items">
                {props.links.map((link) => {
                    return (
                        <li className="main-nav__item" key={link.id}>
                            <Link spy={true} smooth={true} to={link.id}>{link.text}</Link></li>
                    )
                })}
            </ul>
        </nav>
        </div>
    );
}

export default Header;