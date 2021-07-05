import React from "react";
const axios = require("axios");

class CourseDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: [],
      coursed: [],
      allcourse: [],
    };
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://itcode.vn:5000/course",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        let course = [];
        let coursed = [];
    
        for (let item of response.data.data) {
          if (item.isCheck === 2) {
            coursed.push(item);
          } else if (item.isCheck === 1 | item.isCheck === 0) {
            course.push(item);
          }
        }
        return {
          course: course,
          coursed: coursed,
          allcourse: response.data.data,
        };
      })
      .then((data) =>
        this.setState({
          course: data.course,
          coursed: data.coursed,
          allcourse: data.allcourse,
        })
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
   
    return (
      <div className="col-md-6">
        <div className="panel panel-white">
          <div className="panel-heading clearfix">
            <h2 className="text-center">Course</h2>
            <div className="panel-control"></div>
          </div>
          <div className="panel-body">
            <div className="panel-header-stats">
              <div className="row">
                <div className="text-center col-md-4 col-xs-6">
                  <i className="icon-graduation" />
                  <h4 className="no-m">Total: {this.state.allcourse.length}</h4>
                </div>
                <div className="text-center col-md-4 col-xs-6">
                  <i className="icon-arrow-right" />
                  <h4 className="no-m">Plan: {this.state.course.length}</h4>
                </div>
                <div className="text-center col-md-4 col-xs-6">
                  <i className="icon-arrow-up" />
                  <h4 className="no-m">Scheduled: {this.state.coursed.length}</h4>
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
