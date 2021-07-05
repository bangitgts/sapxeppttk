import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class Calender extends React.Component {
  render() {
    let rooms = [
      {
        lichchan: [
          {
            _id: "60e1e7bc389ff1e6125d7adf",
            nameCourse: "1B",
            schedule: "2",
            during: 3,
            amount: 18,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:20 PM",
          },
          {
            _id: "60e1e8b97f07f98163188504",
            nameCourse: "1F",
            schedule: "1",
            during: 2,
            amount: 18,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:12 PM",
          },
        ],
        lichle: [
          {
            _id: "60e1e7c2389ff1e6125d7ae2",
            nameCourse: "1C",
            schedule: "3",
            during: 2,
            amount: 18,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:26 PM",
          },
          { during: 1 },
          {
            _id: "60e1e8b97f07f98163188504",
            nameCourse: "1F",
            schedule: "1",
            during: 2,
            amount: 18,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:12 PM",
          },
        ],
        _id: "60e1e8c6389ff1e6125d7b1a",
        nameRoom: "Phong20",
        capacity: 20,
      },
      {
        lichchan: [
          {
            _id: "60e1e7b4389ff1e6125d7adc",
            nameCourse: "1A",
            schedule: "1",
            during: 2,
            amount: 18,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:12 PM",
          },
          {
            _id: "60e1e7c8389ff1e6125d7ae5",
            nameCourse: "1D",
            schedule: "2",
            during: 3,
            amount: 18,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:32 PM",
          },
        ],
        lichle: [
          {
            _id: "60e1e7b4389ff1e6125d7adc",
            nameCourse: "1A",
            schedule: "1",
            during: 2,
            amount: 18,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:12 PM",
          },
        ],
        _id: "60e1e8c6389ff1e6125d7b1b",
        nameRoom: "Phong20A",
        capacity: 20,
      },
      {
        lichchan: [
          {
            _id: "60e1e7d0389ff1e6125d7ae8",
            nameCourse: "21",
            schedule: "2",
            during: 3,
            amount: 24,
            isCheck: 2,
            createDate: "7/4/2021, 11:54:40 PM",
          },
        ],
        lichle: [],
        _id: "60e1e8c6389ff1e6125d7b1c",
        nameRoom: "Phong30",
        capacity: 30,
      },
      {
        lichchan: [
          {
            _id: "60e1e804389ff1e6125d7aee",
            nameCourse: "31",
            schedule: "1",
            during: 3,
            amount: 34,
            isCheck: 2,
            createDate: "7/4/2021, 11:55:32 PM",
          },
        ],
        lichle: [
          {
            _id: "60e1e804389ff1e6125d7aee",
            nameCourse: "31",
            schedule: "1",
            during: 3,
            amount: 34,
            isCheck: 2,
            createDate: "7/4/2021, 11:55:32 PM",
          },
        ],
        _id: "60e1e8c6389ff1e6125d7b1d",
        nameRoom: "Phong40",
        capacity: 40,
      },
    ];

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
