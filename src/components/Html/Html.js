/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import { googleAnalyticsId } from '../../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: '',
    description: ''
  };

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <style id="css" dangerouslySetInnerHTML={{__html: this.props.css}} />
        <link href="//cdn.muicss.com/mui-0.2.1/css/mui.min.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div id="app"/>
        <script src="/app.js"></script>
      </body>
      </html>
    );
  }

}

export default Html;
