import React from "react";
import { Header } from "../Header";
import { Link } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
const axios = require("axios");

class ShowCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isSelect: false,
      redirect: false
    };
    this.onClick = this.onClick.bind(this);
    this.lenLich = this.lenLich.bind(this);
  }
  componentDidMount() {
    let config = {
      method: "get",
      url: "http://itcode.vn:5000/course",
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({ data: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onClick(event) {
    var config = {
      method: "delete",
      url: `http://itcode.vn:5000/deletecourse/${event}`,
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    };
    const { data } = this.state;
    const c = data;
    const findArr = c.findIndex((el) => el._id === event);
    c.splice(findArr, 1);
    this.setState({
      data: c,
    });

    axios(config)
      .then(function (response) {
        return response;
      })
      .then((data) => {
        store.addNotification({
          title: "Success!",
          message: "Delete Successfully",
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
        console.log(error);
      });
  }

  lenLich() {
    var config = {
      method: "post",
      url: "http://45.77.12.16:5000/sapxepkhoahoc",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        return response.data;
      })
      .then(data => {
        this.setState({
          redirect: true
        })
        store.addNotification({
          title: "Success!",
          message: "Scheduled",
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
        console.log(error);
      });
  }

  render() {
    if (this.state.redirect) {
      window.setTimeout(function () {
        window.location.href = "/showcourse";
      }, 500);
    }
    const { data } = this.state;
    const dataList = data.map((data, index) => {
      const cId = data._id;
      const url = "/editcourse/" + cId + "/";
      return (
        <tr key={index}>
          <td className="text-center">{data.nameCourse}</td>
          <td className="text-center" style={{ width: "15%" }}>
            {data.amount} students
          </td>
          <td className="text-center" style={{ width: "10%" }}>
            {data.schedule === "1"
              ? "Full"
              : data.schedule === "2"
              ? "2-4-6"
              : "3-5-7"}
          </td>
          <td className="text-center" style={{ width: "10%" }}>
            {data.during} weeks
          </td>
          <td className="text-center" style={{ width: "10%" }}>
            {data.isCheck === 0 ? (
              <input
                onClick={() => {
                  var config = {
                    method: "put",
                    url: `http://45.77.12.16:5000/changecourseischeck/${data._id}`,
                    headers: {
                      "auth-token": localStorage.getItem("auth-token"),
                    },
                  };

                  const temp = this.state.data;
                  const removed = temp.splice(index, 1);
                  const newDatadd = {
                    nameCourse: data.nameCourse,
                    schedule: data.schedule,
                    during: data.during,
                    amount: data.amount,
                    isCheck: 1,
                    createDate: data.createDate,
                    _id: data._id,
                  };
                  temp.splice(index, 0, newDatadd);
                  this.setState({
                    data: temp,
                  });
                  axios(config)
                    .then(function (response) {
                      store.addNotification({
                        title: "Success!",
                        message: "Change Successfully",
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
                      console.log(error);
                    });
                }}
                type="checkbox"
                id="c1"
                name="cc"
              />
            ) : data.isCheck === 1 ? (
              <input
                onClick={() => {
                  var config = {
                    method: "put",
                    url: `http://45.77.12.16:5000/changecourseischeck/${data._id}`,
                    headers: {
                      "auth-token": localStorage.getItem("auth-token"),
                    },
                  };

                  const temp = this.state.data;
                  const removed = temp.splice(index, 1);
                  const newDatadd = {
                    nameCourse: data.nameCourse,
                    schedule: data.schedule,
                    during: data.during,
                    amount: data.amount,
                    isCheck: 0,
                    createDate: data.createDate,
                    _id: data._id,
                  };
                  temp.splice(index, 0, newDatadd);
                  this.setState({
                    data: temp,
                  });
                  axios(config)
                    .then(function (response) {
                      store.addNotification({
                        title: "Success!",
                        message: "Change Successfully",
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
                      console.log(error);
                    });
                }}
                type="checkbox"
                id="c1"
                name="cc"
                defaultChecked
              />
            ) : (
              "Scheduled"
            )}
          </td>

          <td className="text-center" style={{ width: "24%" }}>
            {data.isCheck === 2 ? (
              "No action"
            ) : (
              <span>
                <a href={url} className="btn btn-warning">
                  <span className="fa fa-pencil mr-5"></span> Edit
                </a>
                &nbsp;
                <button
                  onClick={() => this.onClick(data._id)}
                  type="button"
                  className="btn btn-danger"
                >
                  <span className="fa fa-trash mr-5"></span> Delete
                </button>
              </span>
            )}
          </td>
        </tr>
      );
    });
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
                <li className="droplink  active open">
                  <a href="#" className="waves-effect waves-button">
                    <span className="menu-icon icon-layers" />
                    <p>Courses</p>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="addcourse">Add Courses</a>
                    </li>
                    <li className="active">
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
              <h3 className="breadcrumb-header">Show Course</h3>
              <div className="page-breadcrumb">
                <ol className="breadcrumb breadcrumb-with-header">
                  <li>
                    <a href="#">Course</a>
                  </li>
                  <li className="active">Course's Information</li>
                </ol>
              </div>
            </div>
            <div id="main-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12">
                    <div className="panel panel-white">
                      <div className="panel-body">
                        <div
                          className="col-md-12"
                          style={{ width: "90%", marginLeft: "46px" }}
                        >
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th
                                    className="text-center"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Name
                                  </th>
                                  <th
                                    className="text-center"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Number Of Students
                                  </th>
                                  <th
                                    className="text-center"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Study Times
                                  </th>
                                  <th
                                    className="text-center"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    During
                                  </th>
                                  <th
                                    className="text-center"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Select To Schedule
                                  </th>
                                </tr>
                              </thead>
                              <tbody>{dataList}</tbody>
                            </table>
                            <button
                              type="submit"
                              className="btn btn-login btn-block"
                              onClick={this.lenLich}
                            >
                              Click to schedule
                            </button>
                          </div>
                        </div>
                      </div>
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

export { ShowCourse };
