import React from "react";
import Taskbar from "./Taskbar";
import Content from "./Content";
import logo from "./images/city_stars.jpg"

const league_data = [
    {
        logo: logo,
        team: 'Gor',
        matches_played: 5,
        matches_won: 3,
        matches_drawn: 1,
        matches_lost: 2
    },
    {
        logo: logo,
        team: 'Arsenal',
        matches_played: 4,
        matches_won: 2,
        matches_drawn: 1,
        matches_lost: 3
    },
    {
        logo: logo,
        team: 'Liverpool',
        matches_played: 3,
        matches_won: 1,
        matches_drawn: 2,
        matches_lost: 4
    }
];

const match_schedule_data = [
    {
        logo: logo,
        match_id: 1,
        date: '2023-08-01',
        time: '13:00',
        home_team: 'Gor',
        away_team: 'Arsenal',
        home_team_score: 1,
        away_team_score: 0
    },
    {
        logo: logo,
        match_id: 2,
        date: '2023-08-01',
        time: '13:00',
        home_team: 'Gor',
        away_team: 'Liverpool',
        home_team_score: 0,
        away_team_score: 1
    },
    {
        logo: logo,
        match_id: 3,
        date: '2023-08-01',
        time: '16:00',
        home_team: 'Arsenal',
        away_team: 'Liverpool',
        home_team_score: null,
        away_team_score: null
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-09-01',
        time: '13:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-09-01',
        time: '13:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-09-01',
        time: '13:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-10-04',
        time: '13:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-10-04',
        time: '13:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-10-04',
        time: '13:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-10-04',
        time: '16:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    {
        logo: logo,
        match_id: 4,
        date: '2023-10-04',
        time: '16:00',
        home_team: 'Arsenal',
        away_team: 'Gor',
        home_team_score: null,
        away_team_score: null,
    },
    
];

const stat = [
    {
        logo: logo,
        team: 'Gor',
        matches_played : 12,
        matches_won: 6,
        matches_lost: 8,
        matches_drawn: 2,
        goal_difference: 5,
    },
    {
        logo: logo,
        team: 'Arsenal',
        matches_played : 12,
        matches_won: 5,
        matches_lost: 8,
        matches_drawn: 4,
        goal_difference: 5,
    },
    {
        logo: logo,
        team: 'Manchester',
        matches_played : 12,
        matches_won: 4,
        matches_lost: 8,
        matches_drawn: 7,
        goal_difference: 5,
    },


]

const FootballApp = () => {
    return (
        <div>
            <Taskbar />
            <Content
                league_data={league_data}
                match_schedule_data={match_schedule_data}/>
        </div>
    )
}

export default FootballApp;