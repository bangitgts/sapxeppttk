import React from "react";
import { Header } from "../Header";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
const axios = require("axios");
const qs = require("qs");

class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCourse: "",
      schedule: "2",
      during: "2",
      amount: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      during: parseInt(this.state.during),
      amount: parseInt(this.state.amount),
    });
    var config = {
      method: "post",
      url: "http://itcode.vn:5000/addcourse",
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
        store.addNotification({
          title: "Success!",
          message: "Successfully added course",
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
        this.setState({
          nameCourse: "",
          schedule: "2",
          during: "2",
          amount: "",
        });
      })
      .catch(function (error) {
        store.addNotification({
          title: "Failure!",
          message: "This course already exists",
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
    return (
      <div>
        <ReactNotification />
        <div className="overlay" />

        {/* Search Form */}
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
                <li className="droplink active open">
                  <a href="#" className="waves-effect waves-button">
                    <span className="menu-icon icon-layers" />
                    <p>Courses</p>
                    <span className="arrow" />
                    <span className="active-page" />
                  </a>
                  <ul className="sub-menu">
                    <li className="active">
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
              <h3 className="breadcrumb-header">Add Course</h3>
              <div className="page-breadcrumb">
                <ol className="breadcrumb breadcrumb-with-header">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Course</a>
                  </li>
                  <li className="active">Add Course</li>
                </ol>
              </div>
            </div>
            <div id="main-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-white">
                    <div className="panel-body">
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
        
        <div className="cd-overlay" />
      </div>
    );
  }
}

export { AddCourse };
