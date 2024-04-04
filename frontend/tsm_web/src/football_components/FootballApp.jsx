import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Content from "./Content";
import NavigationTab from "./NavigationTab";
import CompanyTitleBar from "./CompanyTitleBar";
import '../App.css';

const FootballApp = () => {

    return (
        <div>
            <CompanyTitleBar />
            <Content />
        </div>
    )
}

export default FootballApp;