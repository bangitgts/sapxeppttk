import React from "react";
class CourseDashboard extends React.Component {
  render() {
    return (
        <div className="col-md-6">
        <div className="panel panel-white">
          <div className="panel-heading clearfix">
            <h2 className="text-center">Course</h2>
            <div className="panel-control">

            </div>
          </div>
          <div className="panel-body">
            <div className="panel-header-stats">
              <div className="row">
                <div className="text-center col-md-4 col-xs-6">
                  <i className="icon-graduation" />
                  <h4 className="no-m">Total: 4500</h4>
                </div>
                <div className="text-center col-md-4 col-xs-6">
                  <i className="icon-arrow-right" />
                  <h4 className="no-m">Plan: 2600</h4>
                </div>
                <div className="text-center col-md-4 col-xs-6">
                  <i className="icon-arrow-up" />
                  <h4 className="no-m">Scheduled: 1900</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { CourseDashboard };
