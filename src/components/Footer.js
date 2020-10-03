import React from 'react';


function Footer(){
    return (   
        <footer>
            <div className="container-links">
            <a href="#">Contact</a><span>|</span>
            <a href="#">QUI sommes nous</a><span>|</span>
            <a href="#">RGPD/CGU</a>
            </div>
            <div className="container-logo-sociaux">
            <a href="#"><img src="/assets/images/fb.png" /></a>
            <a href="#"><img src="/assets/images/ist.png" /></a>
            <a href="#"><img src="/assets/images/twt.png" /></a>
            </div>
        </footer>
    )
}

export default Footer