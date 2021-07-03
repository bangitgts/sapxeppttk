import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  componentDidMount(){
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
       
    });
    var config = {
      method: 'get',
      url: 'http://localhost:5000/account',
      headers: { 
        'auth-token': localStorage.getItem('auth-token'),
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      return response.data;
    })
    .then((data) => {
        this.setState({
            email: data.data.email
        })
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="sidebar-pusher"></div>
          <div className="logo-box">
            <a href="index.html" className="logo-text">
              <span>Trung Tam</span>
            </a>
          </div>
          {/* Logo Box */}
          <div className="topmenu-outer">
            <div className="top-menu">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span className="user-name">
                      {this.state.email}
                      <i className="fa fa-angle-down" />
                    </span>
                    <img
                      className="img-circle avatar"
                      src="assets/images/avatar1.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </a>
                  <ul className="dropdown-menu dropdown-list" role="menu">
                    <li role="presentation">
                      <a href="profile.html">
                        <i className="icon-user" />
                        Profile
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="calendar.html">
                        <i className="icon-calendar" />
                        Calendar
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="inbox.html">
                        <i className="icon-envelope-open" />
                        Inbox
                        <span className="badge badge-success pull-right">
                          4
                        </span>
                      </a>
                    </li>
                    <li role="presentation" className="divider" />
                    <li role="presentation">
                      <a href="lock-screen.html">
                        <i className="icon-lock" />
                        Lock screen
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="login.html">
                        <i className="icon-key m-r-xs" />
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Nav */}
            </div>
            {/* Top Menu */}
          </div>
        </div>
      </div>
    );
  }
}

export { Header };
