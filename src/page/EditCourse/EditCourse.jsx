import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Header } from "../Header";
const axios = require("axios");
const qs = require("qs");
class EditCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCourse: "",
      nameCourse1: "",
      schedule: "",
      during: "",
      amount: "",
      redirect: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://itcode.vn:5000/course",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        for (let item of data) {
          const c = this.props.match.params.id;

          if (item._id == c) {
            this.setState({
              nameCourse: item.nameCourse,
              nameCourse1: item.nameCourse,
              schedule: item.schedule,
              during: item.during,
              amount: item.amount,
            });
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    var data = qs.stringify({
      nameCourse: this.state.nameCourse,
      schedule: this.state.schedule,
      during: this.state.during,
      amount: this.state.amount
    });
    var config = {
      method: "put",
      url: `http://45.77.12.16:5000/changefullcourse/${this.props.match.params.id}`,
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        store.addNotification({
          title: "Success!",
          message: "Changed",
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
      .then((data) => {
        this.setState({
          redirect: true,
        });
      })
      .catch(function (error) {
        store.addNotification({
          title: "Failure!",
          message: "This room already exists",
          type: "danger",
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
      });
  }
  render() {
    console.log(this.state);
    if (this.state.redirect) {
      window.setTimeout(function () {
        window.location.href = "/showcourse";
      }, 500);
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
                  <a href="/" className="waves-effect waves-button">
                    <span className="menu-icon icon-home" />
                    <p>Dashboard</p>
                  </a>
                </li>
                <li className="droplink active open">
                  <a href="#" className="waves-effect waves-button">
                    <span className="menu-icon icon-grid" />
                    <p>Room Manager</p>
                    <span className="arrow" />
                    <span className="active-page" />
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
                <li>
                  <a href="calender" className="waves-effect waves-button">
                    <span className="menu-icon icon-calendar" />
                    <p>Schedule</p>
                  </a>
                </li>
              </ul>
            </div>
            {/* Page Sidebar Inner */}
          </div>
          {/* Page Sidebar */}
          <div className="page-inner">
            <div className="page-title">
              <h3 className="breadcrumb-header">Edit Course</h3>
              <div className="page-breadcrumb">
                <ol className="breadcrumb breadcrumb-with-header">
                  <li>
                    <a href="/.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Room</a>
                  </li>
                  <li className="active">Edit Course</li>
                </ol>
              </div>
            </div>
            <div id="main-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-white">
                    <div className="panel-body">
                      <h2
                        style={{ marginLeft: "68px" }}
                        className="control-label"
                      >
                        Edit Course : {this.state.nameCourse1}
                      </h2>
                      &nbsp; &nbsp;
                      <form
                        className="form-horizontal"
                        onSubmit={this.onSubmit}
                      >
                        <div className="form-group">
                          <label
                            htmlFor="input-Default"
                            className="col-sm-2 control-label"
                          >
                            Course's Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="input-Default"
                              name="nameCourse"
                              value={this.state.nameCourse}
                              onChange={this.onChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="input-help-block"
                            className="col-sm-2 control-label"
                          >
                            Number of Student
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="number"
                              min="16"
                              className="form-control"
                              id="input-help-block"
                              name="amount"
                              value={this.state.amount}
                              onChange={this.onChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="input-help-block"
                            className="col-sm-2 control-label"
                          >
                            Study Times
                          </label>
                          <div className="col-sm-10">
                            <select
                              name="schedule"
                              id="input"
                              className="form-abc"
                              value={this.state.schedule}
                              onChange={this.onChange}
                              required
                            >
                              <option selected value="2">
                                Monday, Wednesday, Friday of the week
                              </option>
                              <option value="3">
                                Tuesday, Thursday, Saturday of the week
                              </option>
                              <option value="1">Every day of the week</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="input-help-block"
                            className="col-sm-2 control-label"
                            required
                          >
                            During
                          </label>
                          <div className="col-sm-10">
                            <select
                              name="during"
                              id="input"
                              className="form-abc"
                              onChange={this.onChange}
                              value={this.state.during}
                              required
                            >
                              <option value="2">2 Weeks</option>
                              <option value="3">3 Weeks</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="input-help-block"
                            className="col-sm-2 control-label"
                          ></label>
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-info">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row */}
            </div>
            {/* Main Wrapper */}
            <div className="page-footer">
              <p className="no-s"></p>
            </div>
          </div>
          {/* Page Inner */}
        </main>
        {/* Page Content */}

        <div className="cd-overlay" />
      </div>
    );
  }
}

export { EditCourse };
