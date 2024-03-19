import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../App.css';

const Match = ({match}) => {

    console.log(match);

    return (
        <>
        <Card className="match-card">
            <Row className="match">
                <Col md lg={4}  className="match-team">
                    {match.home_team}
                </Col>
                <Col md lg={true} md>
                    <Row>
                        <Col className="score-home">
                            {match.home_team_score}
                        </Col>
                            <Col className="time">
                                <Row className="time">-</Row>
                                <Row className="time">
                                    {match.time}
                                </Row>
                            </Col>
                        <Col className="score-away">
                            {match.away_team_score}
                        </Col>
                    </Row>
                </Col>
                <Col md lg={4} className="match-team">
                    {match.away_team}
                </Col>
            </Row>
        </Card>
        </>
    )
}

export default Match;