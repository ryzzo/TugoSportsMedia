import React from "react";
import Table from "react-bootstrap/Table"

const LeagueTable = ({league_data}) => {
    console.log(league_data)
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>MP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>pts</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
            <td>1</td>
            <td>Manchester United</td>
            <td>5</td>
            <td>2</td>
            <td>2</td>
            <td>52</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Manchester City</td>
            <td>5</td>
            <td>5</td>
            <td>3</td>
            <td>52</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Chelsea FC</td>
            <td>5</td>
            <td>5</td>
            <td>3</td>
            <td>45</td>
          </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default LeagueTable;