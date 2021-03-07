import React from 'react';
import {Link} from 'react-scroll'

function Footer(props) {
    return (
        <footer className="footer">
            <nav>
                <ul class="footer__links">
                    {props.footerLinks.map((footerLink) => {
                    return (
                        <Link key={footerLink.id} className="footer__link" spy={true} smooth={true} to={footerLink.id} style={{margin: 10}}>{footerLink.text}</Link>
                    )
                    })}
                </ul>
             </nav>
        </footer>
    );
}

export default Footer;

