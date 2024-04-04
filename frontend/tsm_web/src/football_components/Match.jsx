import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuidv4 } from "uuid";

import '../App.css';

const Match = ({match}) => {
    
    return (
        <>
        <Card className="match-card" key={uuidv4()}>
            <Row>
                <Col md lg={4} className="match-team">
                    {match.home_team.name}
                </Col>
                <Col>
                    <Row>
                        <Col className="score-home">
                            {match.played ? <span>{match.home_team_scores}</span>:''}
                        </Col>
                        <Col>
                            <Row className="time">
                                -
                            </Row>
                            <Row className="time">
                                {match.played ? '' : <span>{match.time}</span>}
                            </Row>
                        </Col>
                        <Col className="score-away">
                            {match.played ? <span>{match.away_team_scores}</span>:''}
                        </Col>
                    </Row>
                </Col>
                <Col md lg={4} className="match-team">
                    {match.away_team.name}
                </Col>
            </Row>
        </Card>
        </>
    )
}

export default Match;