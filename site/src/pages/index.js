import _ from 'lodash';
import React from 'react';
import { graphql } from 'gatsby';

import DeckCountChart from 'components/DeckCountChart';
import HeroCount from 'components/HeroCount';
import Layout from 'components/layout';

class Index extends React.Component {
  render() {
    const { data: { keyforgedecks: { listRegisteredDecksCounts: counts } } } = this.props;
    _.sortBy(counts, 'timestamp');

    return (
      <Layout>
        <h1>KeyForge Registered Decks Counter!!</h1>

        <HeroCount count={counts[counts.length - 1].count} timestamp={counts[counts.length - 1].timestamp} />

        <p>
          +{counts[counts.length - 1].count - counts[0].count} decks in last {Math.floor((counts[counts.length - 1].timestamp - counts[0].timestamp) / 3600)} hours
        </p>

        <DeckCountChart data={counts} />
      </Layout>
    );
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
