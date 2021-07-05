import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Header } from "../Header";
const axios = require("axios");
class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passWord: "",
      newPassword: "",
      renewPassword: "",
      isStatus: "",
      dataUser: [],
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const url = "http://45.77.12.16:5000/account";
    var config = {
      method: "get",
      url: url,
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          dataUser: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeText(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.state.newPassword === this.state.renewPassword) {
      var qs = require("qs");
      var data = qs.stringify({
        password: this.state.passWord,
        newPassword: this.state.newPassword,
      });
      var config = {
        method: "put",
        url: "http://45.77.12.16:5000/account/changepassword",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          return response.data;
        })
        .then((data) => {
          this.setState({
            isStatus: true,
          });
          store.addNotification({
            title: "Success!",
            message: "You have successfully changed your password",
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 10000,
              onScreen: false,
              showIcon: true,
            },
          });
        })
        .catch(function (error) {
          store.addNotification({
            title: "Re-enter old password!",
            message: "You entered the old password incorrectly",
            type: "danger",
            insert: "top",
            container: "top-center",
            dismiss: {
              duration: 10000,
              onScreen: false,
              showIcon: true,
            },
          });
        });
    } else {
      store.addNotification({
        title: "Warning!",
        message: "You entered a new password that does not match",
        type: "warning",
        insert: "top",
        container: "top-center",
        dismiss: {
          duration: 10000,
          onScreen: false,
          showIcon: true,
        },
      });
    }
  }
  render() {
    const { dataUser } = this.state;
    if (
      (this.state.newPassword !== "") &
      (this.state.newPassword === this.state.renewPassword)
    ) {
      var checkPassword = (
        <i style={{ color: "green" }} class="fa fa-check">
          {" "}
        </i>
      );
    }
    return (
      <div>
        <ReactNotification />
        <div className="overlay" />
        <main className="page-content content-wrap">
          <Header />
          {/* Navbar */}
          <div className="page-sidebar sidebar">
            <div className="page-sidebar-inner slimscroll">
              <ul className="menu accordion-menu">
                <li>
                  <a href="index.html" className="waves-effect waves-button">
                    <span className="menu-icon icon-home" />
                    <p>Dashboard</p>
                  </a>
                </li>

                <li className="droplink">
                  <a href="#" className="waves-effect waves-button">
                    <span className="menu-icon icon-grid" />
                    <p>Room Manager</p>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="addroom">Add Room</a>
                    </li>
                    <li>
                      <a href="roominformation">Information</a>
                    </li>
                  </ul>
                </li>
                <li className="droplink">
                  <a href="#" className="waves-effect waves-button">
                    <span className="menu-icon icon-layers" />
                    <p>Courses</p>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="addcourse">Add Courses</a>
                    </li>
                    <li>
                      <a href="showcourse">Information</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Page Sidebar Inner */}
          </div>
          {/* Page Sidebar */}
          <div className="page-inner">
            <div className="page-title">
              <h3 className="breadcrumb-header">Change Password</h3>
              <div className="page-breadcrumb">
                <ol className="breadcrumb breadcrumb-with-header">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="account">Account</a>
                  </li>
                  <li className="active">Change Password</li>
                </ol>
              </div>
            </div>
            <div id="main-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-white">
                    <div className="panel-body">
                      <div className="login-box">
                        <div className="m-t-md col-md-12">
                          <form className="m-t-md" onSubmit={this.onSubmit}>
                            <h2 className="text-center">Change Password</h2>
                            <br></br>
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="password"
                                name="passWord"
                                placeholder="Enter old password"
                                onChange={this.onChangeText}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="password"
                                name="newPassword"
                                placeholder="Enter new password "
                                onChange={this.onChangeText}
                                required
                              />
                            </div>
                            <div className="form-group">
                              
                              <input
                                type="password"
                                className="form-control password"
                                name="renewPassword"
                                placeholder="Re-enter old password "
                                onChange={this.onChangeText}
                                required
                              />
                            
                            </div>

                            <button
                              type="submit"
                              className="btn btn-login btn-block"
                            >
                              Log in
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Wrapper */}
            <div className="page-footer">
              <p className="no-s"></p>
            </div>
          </div>
          {/* Page Inner */}
        </main>
        <div className="cd-overlay" />
      </div>
    );
  }
}

export { ChangePassword };
