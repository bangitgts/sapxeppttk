import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Header } from "../Header";
const axios = require("axios");
const qs = require("qs");
class EditRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRoom: "",
      nameRoom1: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://localhost:5000/room",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        return response.data.data
      })
      .then(data=>{
      
          for(let items of data){
              if(items._id === this.props.match.params.id){
                
                  this.setState({
                      nameRoom: items.nameRoom,
                      nameRoom1: items.nameRoom
                  })
              }
              else{
                  console.log("xyz")
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
      nameRoom: this.state.nameRoom,
      capacity: parseInt(this.state.capacity),
    });
    var config = {
      method: "post",
      url: "http://localhost:5000/addroom",
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
          message: "Successfully added room",
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
                <li>
                  <a href="profile.html" className="waves-effect waves-button">
                    <span className="menu-icon icon-user" />
                    <p>Profile</p>
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
                    <li className="active">
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
                      <a href="404.html">Add Courses</a>
                    </li>
                    <li>
                      <a href="500.html">Information</a>
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
              <h3 className="breadcrumb-header">Edit Room</h3>
              <div className="page-breadcrumb">
                <ol className="breadcrumb breadcrumb-with-header">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Room</a>
                  </li>
                  <li className="active">Edit Room</li>
                </ol>
              </div>
            </div>
            <div id="main-wrapper">
              <div className="row">
                <div className="col-md-12">
                   
                  <div className="panel panel-white">
                    <div className="panel-body">
                    <h2 style={{marginLeft: '68px'}} className="control-label">Edit Room : {this.state.nameRoom1}</h2>
                    &nbsp;
                    &nbsp;
                      <form
                        className="form-horizontal"
                        onSubmit={this.onSubmit}
                      >
                        <div className="form-group">
                          <label
                            htmlFor="input-Default"
                            className="col-sm-2 control-label"
                          >
                            Room's Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              name="nameRoom"
                              className="form-control"
                              id="input-Default"
                              value={this.state.nameRoom}
                              onChange={this.onChange}
                              required
                            />
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

export { EditRoom };
