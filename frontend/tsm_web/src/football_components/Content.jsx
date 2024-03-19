import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link, 
} from "react-router-dom";

import MatchSchedule from "./MatchSchedule";
import LeagueTable from "./LeagueTable";

const Content = ({league_data, match_schedule_data}) => {
    console.log(league_data)
    return (
        <Router>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/matches">Matches</Nav.Link>
                        <Nav.Link href="/league-table">Table</Nav.Link>
                    </Nav>
                    </Container>
            </Navbar>
            <Routes>
                <Route path="matches" element={<MatchSchedule match_schedule_data={match_schedule_data}/>}/>
                <Route path="league-table" element={<LeagueTable league_data={league_data}/>}/>
            </Routes>
        </Router>
    )
}

export default Content;