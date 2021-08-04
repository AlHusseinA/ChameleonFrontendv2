import React from "react";

const Header = () => {
    return (
        <div>
            <img className="chameleon-icon" src={process.env.PUBLIC_URL + 'chameleonprod3.png'} alt="Write something here" />
            <h1>Chameleon</h1>
            <h5>Your virtual Standardised Patient (SP)</h5>
        </div>
    );
}

export default Header;