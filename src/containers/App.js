import React, { Component } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavigationBar from "./NavigationBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <CssBaseline>
        <NavigationBar />
      </CssBaseline>
    );
  }
}

export default App;
