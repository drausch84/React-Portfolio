import React, {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import "./BarGraph.css";

const data = [
    {name: 'HTML', Skill_Level: 10},
    {name: 'CSS', Skill_Level: 10},
    {name: 'JS/jQuery', Skill_Level: 6},
    {name: 'React/Redux', Skill_Level: 6},
    {name: 'MYSQL', Skill_Level: 8},
    {name: 'MongoDB', Skill_Level: 7},
    {name: 'NodeJS', Skill_Level: 7},
];
class BarGraph extends Component{
  render () {
    return (
    <div className = "bar-chart">
      <BarChart width={800} height={600} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <CartesianGrid strokeDasharray="3 3"/>
     <XAxis dataKey="name"/>
     <YAxis type ="number" domain = {[0,10]} />
     <Tooltip/>
     <Legend />
     <Bar dataKey="Skill_Level" fill="#A00000" />
     
    </BarChart>
    </div>
  );
}
}

export default BarGraph;