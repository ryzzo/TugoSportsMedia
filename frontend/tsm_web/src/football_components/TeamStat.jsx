import React from "react";
import Table from "react-bootstrap/Table"

import '../App.css';

const TeamStat = ({team_stat, count}) => {

    const url = team_stat.team.logo

    return (
        <tr className="table-row">
            <td>
                {count}
            </td>
            <td>
                <span>
                    <img 
                        src={url} 
                        className="team-logo" 
                        alt={team_stat.team.team_name}
                    />
                </span>
                <span>
                    {team_stat.team.name}
                </span>
            </td>
            <td>
                {team_stat.matches_played}
            </td>
            <td>
                {team_stat.matches_won}
            </td>
            <td>
                {team_stat.matches_drawn}
            </td>
            <td>
                {team_stat.matches_lost}
            </td>
            <td>
                {team_stat.goals_for}
            </td>
            <td>
                {team_stat.goals_against}
            </td>
            <td>
                {team_stat.goal_difference}
            </td>
            <td>
                {team_stat.points}
            </td>
          </tr>
    )
}

export default TeamStat;