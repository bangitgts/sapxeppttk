import { routes } from "./routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import { PrivateRoute } from "./auth/";
import { Dashboard } from "./page/Dashboard";
import { AddRoom } from "./page/AddRoom";
import { ShowRoom } from "./page/ShowRoom";
import { AddCourse } from "./page/AddCourse";
import { ShowCourse } from "./page/ShowCourse";
import { ChangePassword } from "./page/ChangePassword";
import { PageCalender } from "./page/PageCalender";

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
        <PrivateRoute exact authed path="/" component={Dashboard} />{" "}
        <PrivateRoute exact authed path="/addroom" component={AddRoom} />{" "}
        <PrivateRoute
          exact
          authed
          path="/roominformation"
          component={ShowRoom}
        />{" "}
        <PrivateRoute exact authed path="/addcourse" component={AddCourse} />{" "}
        <PrivateRoute exact authed path="/showcourse" component={ShowCourse} />{" "}
        <PrivateRoute
          exact
          authed
          path="/changepassword"
          component={ChangePassword}
        />{" "}
        <PrivateRoute exact authed path="/calender" component={PageCalender} />{" "}
      </Router>
    );
  }
}

export default App;
