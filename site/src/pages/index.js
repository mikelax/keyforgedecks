import _ from 'lodash';
import React from 'react';
import dateFns from 'date-fns';
import { graphql } from 'gatsby';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import Layout from 'components/layout';

class Index extends React.Component {
  render() {
    const { data: { keyforgedecks: { listRegisteredDecksCounts: counts } } } = this.props;
    _.sortBy(counts, 'timestamp');

    return <Layout>
        <h1>Registered Keyforge Deck Counter!!</h1>

        <div>
          Current Count: {counts[counts.length - 1].count}
          <br />
          Last Updated: {dateFns.format(new Date(counts[counts.length - 1].timestamp * 1000), 'MM/DD/YYYY H:ma Z')}
        </div>

        <p>
          +{counts[counts.length - 1].count - counts[0].count} decks in last {Math.floor((counts[counts.length - 1].timestamp - counts[0].timestamp) / 3600)} hours
          <br />
          Why isn't this the same as above? {Math.floor(dateFns.differenceInSeconds(Number(counts[counts.length - 1].timestamp), Number(counts[0].timestamp))/3600)}
        </p>

        <p>
          Count of data points is {counts.length}
          <br /> Count at start of data points: {counts[0].count}
        </p>

        <DeckCountChart data={counts} />
      </Layout>;
  }
}

const DeckCountChart = ({ data }) => {

  return <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dot={false} dataKey="count" stroke="#8884d8" />
      <XAxis dataKey="timestamp" />
      <YAxis domain={['dataMin - 10000', 'dataMax + 10000']} />
    </LineChart>;
}

export const query = graphql`
         query {
           keyforgedecks {
             listRegisteredDecksCounts(filter: { date: "2018-11-20" }) {
               timestamp
               count
             }
           }
         }
       `;

export default Index;
