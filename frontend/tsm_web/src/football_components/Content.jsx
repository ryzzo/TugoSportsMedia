import React from "react";
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
} from "react-router-dom";


import MatchSchedule from "./MatchSchedule";
import LeagueTable from "./LeagueTable";
import TitleBar from "./TitleBar";

const Content = () => {
    
    return (
        <Router>
            <TitleBar />
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/" style={{textDecoration:'inherit', color:'inherit'}}>
                                Matches
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/league-table" style={{textDecoration:'inherit', color:'inherit'}}>
                                Table
                            </Link>
                        </Nav.Link>
                    </Nav>
                    </Container>
            </Navbar>
            <Routes>
                <Route path="" Component={MatchSchedule}/>
                <Route path="league-table" Component={LeagueTable}/>
            </Routes>
        </Router>
    )
}

export default Content;