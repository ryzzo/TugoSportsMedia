import React from "react";
import Navbar from "react-bootstrap/Navbar";

const TitleBar = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <img
                    src="../../images/kenya_premier_league_logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/>
                Kenya Premier League
            </Navbar.Brand>
        </Navbar>
    )
}

export default TitleBar;