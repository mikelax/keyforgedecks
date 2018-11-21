import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import 'styles/main.css';

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
          <title>Registered KeyForge Decks Statistics</title>
          <meta property="og:type" content="website" />
        </Helmet>
        <div className="body">
          <div id="wrapper">
            {children}
            <footer id="footer">
              <p>Built & maintained by Michael Holtzman{' '}
                <a
                  href="https://twitter.com/mikelax"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @mikelax
                </a>
                <br />
                &copy; 2018, Michael Holtzman
              </p>
            </footer>
          </div>
        </div>
      </React.Fragment>;
  }
}

export default Template;
