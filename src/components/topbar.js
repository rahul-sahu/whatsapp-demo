import React from 'react';

// Topbar contains the Back Icon, Profile Picture, Name and More Settings Symbol 

function TopBar(props) {
    return (
        <div className="top-bar">
            <div className="back">
                <i className="zmdi zmdi-arrow-left"></i>
            </div>
            <div className="avatar">
                <img src={props.client.displayPicture} alt="profile-picutre"></img>
            </div>
            <div className="user-name">OnlineSales.ai</div>

            <div className="actions">
                <i className="zmdi zmdi-more-vert zmdi-hc-2x"></i>
            </div>
        </div>
    );
}

export default TopBar;