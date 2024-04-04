import React, { useState, useEffect, useRef, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

import Match from "./Match";
// import getNearestDate from "./backend/dateView";

const MatchSchedule = () => {

    const [matchSchedule, setMatchSchedule] = useState([]);
    const [date, setDate] = useState('')
    const [dateData, setDateData] = useState('')
    const ref = useRef(null)

    const league_url = "http://localhost:8000/football/match_games/";

    useEffect(() =>{
        async function getMatches() {
            const response = await axios.get(league_url);
            setMatchSchedule(response.data);
        }
        getMatches();
        matchesDates();
    }, []);

    function matchesDates() {
        /*
        function that returns all the match dates
        */
        const dates = matchSchedule.map((match) => 
        match.date
        )
        return dates;
    }
    
    const groupedDate = matchSchedule.reduce((group, item) => {
        /*
        function that groups matches with similar match dates
        */
        const { date } = item;
        if (!group[date]) {
            group[date] = [];
        }
        group[date].push(item);
        return group;
    }, {});

    const handleChangeValue = () =>{
        /* 
        function to scroll the view to current
        matches
        */
        if (ref.current){
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }

    const data = Object.entries(groupedDate);

    handleChangeValue();

    return(
        <Container>
            {data.map(([category, items]) => (
                <div onLoad={handleChangeValue()} key={category} ref={category === date ? ref : null}>
                   <div>{category}</div>
                    <ListGroup variant="flush">
                        {items.map((item) => (
                            <Match key={item.id} match={item}/>
                        ))}
                    </ListGroup>
                </div>
            ))}
        </Container>
    )
}
export default MatchSchedule;
