import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount(){
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
       
    });
    var config = {
      method: 'get',
      url: 'http://itcode.vn:5000/account',
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
  logOut() {
    localStorage.removeItem("auth-token");
    window.location = "/login";
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="sidebar-pusher"></div>
          <div className="logo-box">
            <a href="index.html" className="logo-text">
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
                      <a href="changepassword">
                        <i className="icon-lock" />
                        Change Password
                      </a>
                    </li>
                    <li role="presentation" className="divider" />
                    
                    <li role="presentation">
                      <a style={{cursor:"pointer"}} onClick={this.logOut}>
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
