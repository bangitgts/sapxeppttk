import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const axios = require("axios");

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:5000/room",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) =>
        this.setState({
          rooms: data,
        })
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { rooms } = this.state;
    let temp = [];
    for (let idroom = 0; idroom < rooms.length; idroom++) {
      // for duyet room
      if (rooms[idroom].lichchan.length !== 0) {
        var i = 1;
        for (let lc = 0; lc < rooms[idroom].lichchan.length; lc++) {
          // duyet tung phan tu trong array lich chan
          for (
            let date = i;
            date <
            rooms[idroom].lichchan
              .slice(0, lc)
              .reduce(function (accumulator, currentValue) {
                return accumulator + parseInt(currentValue.during);
              }, 0) *
              7 +
              rooms[idroom].lichchan[lc].during * 7;
            date++
          ) {
            let c = 11;
            c = c + date;
            i =
              rooms[idroom].lichchan
                .slice(0, lc + 1)
                .reduce(function (accumulator, currentValue) {
                  return accumulator + parseInt(currentValue.during);
                }, 0) * 7;

            const day = new Date();
            day.setDate(c);
            if (
              (day.getDay() === 1) |
              (day.getDay() === 3) |
              (day.getDay() === 5)
            ) {
              if (String(day.getMonth()).length === 1) {
                var month = "0" + String(day.getMonth() + 1);
              } else {
                var month = String(day.getMonth() + 1);
              }

              if (String(day.getDate()).length === 1) {
                var ngay = "0" + String(day.getDate());
              } else {
                var ngay = String(day.getDate());
              }
              const year = String(day.getFullYear());
              const item = {
                title: `${rooms[idroom].nameRoom} | ${rooms[idroom].lichchan[lc].nameCourse}`,
                date: `${year}-${month}-${ngay}`,
              };
              if (rooms[idroom].lichchan[lc].nameCourse !== undefined) {
                temp.push(item);
              }
            }
          }
        }
      }
      if (rooms[idroom].lichle.length !== 0) {
        var i = 1;
        for (let lc = 0; lc < rooms[idroom].lichle.length; lc++) {
          // duyet tung phan tu trong array lich chan
          for (
            let date = i;
            date <
            rooms[idroom].lichle
              .slice(0, lc)
              .reduce(function (accumulator, currentValue) {
                return accumulator + parseInt(currentValue.during);
              }, 0) *
              7 +
              rooms[idroom].lichle[lc].during * 7;
            date++
          ) {
            let c = 11;
            c = c + date;
            i =
              rooms[idroom].lichle
                .slice(0, lc + 1)
                .reduce(function (accumulator, currentValue) {
                  return accumulator + parseInt(currentValue.during);
                }, 0) * 7;

            const day = new Date();
            day.setDate(c);
            if (
              (day.getDay() === 2) |
              (day.getDay() === 4) |
              (day.getDay() === 6)
            ) {
              if (String(day.getMonth()).length === 1) {
                var month = "0" + String(day.getMonth() + 1);
              } else {
                var month = String(day.getMonth() + 1);
              }

              if (String(day.getDate()).length === 1) {
                var ngay = "0" + String(day.getDate());
              } else {
                var ngay = String(day.getDate());
              }
              const year = String(day.getFullYear());
              const item = {
                title: `${rooms[idroom].nameRoom} | ${rooms[idroom].lichle[lc].nameCourse}`,
                date: `${year}-${month}-${ngay}`,
              };
              if (rooms[idroom].lichle[lc].nameCourse !== undefined) {
                temp.push(item);
              }
            }
          }
        }
      }
    }

    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={temp}
      />
    );
  }
}

export { Calender };
