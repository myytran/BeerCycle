import React from 'react';
import {Link} from 'react-scroll'

function Footer(props) {
    return (
        <div className="header-container">
            <h3>Footer</h3>
            {props.footerLinks.map((footerLink) => {
                return (
                    <Link spy={true} smooth={true} to={footerLink.id} style={{margin: 10}}>{footerLink.text}</Link>
                )
            })}
        </div>
    );
}

export default Footer;