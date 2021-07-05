import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Header } from "../Header";
import { CourseDashboard } from "../CourseDashBoard/CourseDashboard";
import { RoomDashboard } from "../RoomDashBoard";

class Dashboard extends React.Component {
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
                <li className="active open">
                  <a href="index.html" className="waves-effect waves-button">
                    <span className="menu-icon icon-home" />
                    <p>Dashboard</p>
                    <span className="active-page" />
                  </a>
                </li>
                <li>
                  <a href="profile.html" className="waves-effect waves-button">
                    <span className="menu-icon icon-user" />
                    <p>Profile</p>
                  </a>
                </li>

                <li className="droplink">
                  <a href="#" className="waves-effect waves-button">
                    <span className="menu-icon icon-grid" />
                    <p>Room Manager</p>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li c>
                      <a href="addroom">Add Room</a>
                    </li>
                    <li>
                      <a href="roominformation">Information</a>
                    </li>
                  </ul>
                </li>
                <li className="droplink">
                  <a href="#" className="waves-effect waves-button">
                    <span className="menu-icon icon-graduation" />
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
                <li>
                  <a href="profile.html" className="waves-effect waves-button">
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
              <h3 className="breadcrumb-header">Dashboard</h3>
              <div className="page-breadcrumb">
                <ol className="breadcrumb breadcrumb-with-header">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                </ol>
              </div>
            </div>
            <div id="main-wrapper">
              <div className="row">
                <CourseDashboard />
                <RoomDashboard/>
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

export { Dashboard };
