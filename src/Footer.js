import React from 'react';
import {Link} from 'react-scroll'

function Footer(props) {
    return (
        <div className="header-container">
            <h3>Footer</h3>
            {props.links.map((link) => {
                return (
                    <Link spy={true} smooth={true} to={link.id} style={{margin: 10}}>{link.text}</Link>
                )
            })}
        </div>
    );
}

export default Footer;