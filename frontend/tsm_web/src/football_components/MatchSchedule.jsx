import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import Match from "./Match";

const MatchSchedule = ({match_schedule_data}) => {
    
    const groupedData = match_schedule_data.reduce((group, item) => {
        const { date } = item;
        if (!group[date]) {
            group[date] = [];
        }
        group[date].push(item);
        return group;
    }, {});

    return (
        <Container>
            <>
            <ListGroup variant="flush">
                {Object.entries(groupedData).map(([category, items]) => (
                    <>
                    <span>{category}</span>
                    <ListGroup variant="flush">
                        {items.map((item) => (
                            <Match match={item}/>
                        ))}
                    </ListGroup>
                    </>   
                ))}
            </ListGroup>
            </>
        </Container>
    )
}

export default MatchSchedule;
