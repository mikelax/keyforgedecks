// import numbro from 'numbro';
import { formatDistanceStrict } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import numbro from 'numbro';

const DeckCountChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data} margin={{ left: 80, right: 80 }}>
      <Line type="monotone" dot={false} dataKey="count" stroke="#7F1219" />
        <XAxis dataKey="timestamp" height={90} tick={<XAxisTick />} />
        <YAxis
          domain={['dataMin - 10000', 'dataMax + 10000']}
          tickFormatter={(value) => numbro(value).format({ thousandSeparated: true })}
        />
        <Tooltip
          formatter={(value) => numbro(value).format({ thousandSeparated: true })}
          labelFormatter={(label) => null }
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

DeckCountChart.propTypes = {
  data: PropTypes.array.isRequired
}

// private
const XAxisTick = ({ x, y, stroke, payload }) => {
  const offset = formatDistanceStrict(new Date(), payload.value * 1000, { addSuffix: true });
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fill="#666" textAnchor="end" transform="rotate(-40)">
        {offset}
      </text>
    </g>
  );
}

export default DeckCountChart;
