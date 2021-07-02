import { routes } from "./routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
    };
  }

  showContent(routes) {
    var result = [];
    if (routes.length > 0) {
      var result = routes.map((route) => {
        return (
          <Route path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  }

  render() {
    // const { authed } = this.state;
    return (
      <Router>
        {" "}
        {this.showContent(routes)}{" "}
       
      </Router>
    );
  }
}

export default App;
