import React from "react";
class RoomDashboard extends React.Component {
  render() {
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
                  <h4 className="no-m">Total: 4500</h4>
                </div>
                <div className="text-center col-md-3 col-xs-6">
                  <i className="icon-star" />
                  <h4 className="no-m">Room20: 26</h4>
                </div>
                <div className="text-center col-md-3 col-xs-6">
                  <i className="icon-graph" />
                  <h4 className="no-m">Room30: 19</h4>
                </div>
                <div className="text-center col-md-3 col-xs-6">
                  <i className="icon-arrow-up" />
                  <h4 className="no-m">Room40: 1900</h4>
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
