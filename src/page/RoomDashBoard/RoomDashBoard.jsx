import React from "react";
const axios = require("axios");
class RoomDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: [],
      room20: [],
      room30: [],
      room40: [],
    };
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://itcode.vn:5000/room",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        let room20 = [];
        let room30 = [];
        let room40 = [];
        for (let item of response.data.data) {
          if (item.capacity === 20) {
            room20.push(item);
          } else if (item.capacity === 30) {
            room30.push(item);
          } else {
            room40.push(item);
          }
        }
        return { 
            room20: room20,
            room30: room30,
            room40: room40,
            room: response.data.data
        }
      })
      .then(data => this.setState({
          room20: data.room20,
          room30: data.room30,
          room40: data.room40,
          room: data.room,

      }))
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    console.log(this.state)
    return (
      <div className="col-md-6">
        <div className="panel panel-white">
          <div className="panel-heading clearfix">
            <h2 className="text-center">Room</h2>
            <div className="panel-control"></div>
          </div>
          <div className="panel-body">
            <div className="panel-header-stats">
              <div className="row">
                <div className="text-center col-md-3 col-xs-6">
                  <i className="icon-grid" />
                  <h4 className="no-m">Total: {this.state.room.length}</h4>
                </div>
                <div className="text-center col-md-3 col-xs-6">
                  <i className="icon-star" />
                  <h4 className="no-m">Room20: {this.state.room20.length}</h4>
                </div>
                <div className="text-center col-md-3 col-xs-6">
                  <i className="icon-graph" />
                  <h4 className="no-m">Room30: {this.state.room30.length}</h4>
                </div>
                <div className="text-center col-md-3 col-xs-6">
                  <i className="icon-arrow-up" />
                  <h4 className="no-m">Room40: {this.state.room40.length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { RoomDashboard };
