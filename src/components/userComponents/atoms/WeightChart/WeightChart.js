import React from 'react';
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';




const WeightChart = ({userWeights}) => (
  <ResponsiveContainer width="100%" height="80%">
  <LineChart  data={userWeights} margin={{
     right: 10, left: -20
  }}>
    <Line type="monotone" dataKey="weight" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="dateAdded" />
    <YAxis type="number" />
  </LineChart>
  </ResponsiveContainer>
);

WeightChart.propTypes = {
  userWeights: PropTypes.arrayOf(
    PropTypes.shape({


    }),
  ).isRequired,
}

export default WeightChart;