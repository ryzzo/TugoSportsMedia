import React, { useState, useEffect} from "react";
import Table from "react-bootstrap/Table"
import axios from "axios";

import TeamStat from "./TeamStat";

const LeagueTable = () => {


    const stat_url = "http://localhost:8000/football/stats/";
    
    const [team_stats, setTeamStats] = useState([]);

    const fetchStatData = async() => {
        return await axios.get(stat_url)
            .then((response) =>
            {
                setTeamStats(response.data);
            })
    };

    useEffect(() => {
        fetchStatData()
    }, []);
    
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>MP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>pts</th>
                    </tr>
                </thead>
                <tbody>
                    {team_stats.map((team_stat, index) =>
                        <TeamStat key={index} team_stat={team_stat} count={index + 1}/>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default LeagueTable;