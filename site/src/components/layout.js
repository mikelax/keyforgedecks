import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

class Template extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    children: null
  };

  render() {
    const { children } = this.props;

    return <React.Fragment>
        <Helmet>
          <title>Registered Keyforge Decks Statistics</title>
          <meta property="og:type" content="website" />
        </Helmet>
        <div className="body">
          <div id="wrapper">{children}</div>
        </div>
      </React.Fragment>;
  }
}

export default Template;
