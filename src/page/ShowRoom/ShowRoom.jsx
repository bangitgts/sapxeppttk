import React from "react";
import { Header } from "../Header";
import { Link } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
const axios = require("axios");

class ShowRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isSelect: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    let config = {
      method: "get",
      url: "http://itcode.vn:5000/room",
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
      url: `http://itcode.vn:5000/deleteroom/${event}`,
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

  render() {
    const { data } = this.state;
    const dataList = data.map((data, index) => {
      const cId  = data._id;
      const url = "/editroom/" + cId + "/"
      return (
        <tr key={index}>
          <td>{data.nameRoom}</td>
          <td>{data.capacity}</td>
          <td className="text-center" style={{ width: "33%" }}>
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
          </td>
        </tr>
      );
    });
    return (
      <div>
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
                    <li className="active">
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
              <h3 className="breadcrumb-header">Add Room</h3>
              <div className="page-breadcrumb">
                <ol className="breadcrumb breadcrumb-with-header">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Room</a>
                  </li>
                  <li className="active">Room's Information</li>
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
                                  <th>Name</th>
                                  <th>Capacity</th>
                                </tr>
                              </thead>
                              <tbody>{dataList}</tbody>
                            </table>
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
        <nav className="cd-nav-container" id="cd-nav">
          <header>
            <h3>DEMOS</h3>
          </header>
          <div className="col-md-6 demo-block">
            <a href="../admin1/index.html">
              <p>
                Dark
                <br />
                Design
              </p>
            </a>
          </div>
          <div className="col-md-6 demo-block">
            <a href="../admin2/index.html">
              <p>
                Light
                <br />
                Design
              </p>
            </a>
          </div>
          <div className="col-md-6 demo-block demo-selected demo-active">
            <p>
              Material
              <br />
              Design
            </p>
          </div>
          <div className="col-md-6 demo-block demo-coming-soon">
            <p>
              Horizontal
              <br />
              (Coming)
            </p>
          </div>
          <div className="col-md-6 demo-block demo-coming-soon">
            <p>
              Coming
              <br />
              Soon
            </p>
          </div>
          <div className="col-md-6 demo-block demo-coming-soon">
            <p>
              Coming
              <br />
              Soon
            </p>
          </div>
        </nav>
        <div className="cd-overlay" />
      </div>
    );
  }
}

export { ShowRoom };
