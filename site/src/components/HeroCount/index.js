import dateFns from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import numbro from 'numbro';

import './herocount.css';

const CurrentCount = ({ count, timestamp }) => {
  return <div className="heroCount">
    <span className="heading">Registered Decks</span>
    <br />
    <span id="count">{numbro(count).format({ thousandSeparated: true })}</span>
    <br />
    <span className="subheading">Last Refreshed: {dateFns.format(new Date(timestamp * 1000), 'MM/DD/YYYY h:ma Z')}</span>
  </div>;
}

CurrentCount.propTypes = {
  /** The registered deck count */
  count: PropTypes.number.isRequired,
  /** Unix timestamp (seconds since epoc) */
  timestamp: PropTypes.number.isRequired
}

export default CurrentCount;
