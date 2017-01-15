import React, { Component } from 'react';
import { Link } from 'react-router';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class About extends Component {

  constructor(props){
      super();

      this.style = {
        margin: 12,
      };

  }

  static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme()
        }
    }


  render() {
    return (
      <div>
        About
        <Link to={`/inboxs/15`}>123</Link>
          <div>
            <FlatButton label="Default" />
              <RaisedButton label="Primary" primary={true} style={this.style } />
              <RaisedButton label="Secondary" secondary={true} style={this.style } />
              <RaisedButton label="Disabled" disabled={true} style={this.style } />
              <br />
              <br />
              <RaisedButton label="Full width" fullWidth={true} />
          </div>
      </div>

    );
  }
}

export default About;
