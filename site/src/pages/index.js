import _ from 'lodash';
import React from 'react';
import { graphql } from 'gatsby';
import numbro from 'numbro';

import DeckCountChart from 'components/DeckCountChart';
import HeroCount from 'components/HeroCount';
import Layout from 'components/layout';

class Index extends React.Component {
  render() {
    const { data: { keyforgedecks: { listRegisteredDecksCounts: counts } } } = this.props;
    _.sortBy(counts, 'timestamp');
    // most recent data point count and timestamp
    const latestCount = counts[counts.length - 1].count;
    const latestTimestamp = counts[counts.length - 1].timestamp;

    return <Layout>
        <h1>KeyForge Registered Decks Counter!!</h1>

        <HeroCount count={latestCount} timestamp={latestTimestamp} />

        <p>
          {numbro(latestCount - counts[0].count).format({
            thousandSeparated: true
          })} new decks in last {Math.floor((latestTimestamp - counts[0].timestamp) / 3600)} hours
        </p>

        <DeckCountChart data={counts} />
      </Layout>;
  }
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
