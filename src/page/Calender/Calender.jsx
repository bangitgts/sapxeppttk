import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class Calender extends React.Component {
  render() {
    let rooms = [
      {
        lichchan: [
          {
            _id: "60df30adfd817954dcb80b27",
            nameCourse: "Khóa 2",
            schedule: "2",
            during: 2,
            amount: 19,
            isCheck: 2,
            createDate: "7/2/2021, 10:28:45 PM",
          },
          {
            _id: "60df3054fd817954dcb80b22",
            nameCourse: "Khóa 1",
            schedule: "2",
            during: 2,
            amount: 18,
            isCheck: 2,
            createDate: "7/2/2021, 10:27:16 PM",
          },
        
          {
            _id: "60df3054fd817954dcb80b22",
            nameCourse: "Khóa 100",
            schedule: "2",
            during: 2,
            amount: 18,
            isCheck: 2,
            createDate: "7/2/2021, 10:27:16 PM",
          }
        ],
        lichle: [
          {
            _id: "60df3054fd817954dcb81291",
            nameCourse: "Khóa 7",
            schedule: "1",
            during: 3,
            amount: 18,
            isCheck: 2,
            createDate: "7/2/2021, 10:27:16 PM",
          },
        ],
        _id: "60df33e3fd817954dcb80bcf",
        nameRoom: "Phòng 1",
        capacity: 20,
      },
      {
        lichchan: [
          {
            _id: "60df30b3fd817954dcb80b2a",
            nameCourse: "Khóa 3",
            schedule: "2",
            during: 2,
            amount: 22,
            isCheck: 2,
            createDate: "7/2/2021, 10:28:51 PM",
          },
          {
            _id: "60df30befd817954dcb80b2f",
            nameCourse: "Khóa 4",
            schedule: "1",
            during: 2,
            amount: 25,
            isCheck: 2,
            createDate: "7/2/2021, 10:29:02 PM",
          },
        ],
        lichle: [
          {
            during: 2,
          },
          {
            _id: "60df30befd817954dcb80b2f",
            nameCourse: "Khóa 4",
            schedule: "1",
            during: 2,
            amount: 25,
            isCheck: 2,
            createDate: "7/2/2021, 10:29:02 PM",
          },
        ],
        _id: "60df33e3fd817954dcb80bd0",
        nameRoom: "Phòng 2",
        capacity: 30,
      },
      {
        lichchan: [
          {
            _id: "60df30c9fd817954dcb80b32",
            nameCourse: "Khóa 6",
            schedule: "1",
            during: 2,
            amount: 32,
            isCheck: 2,
            createDate: "7/2/2021, 10:29:13 PM",
          },
        ],
        lichle: [
          {
            _id: "60df30c9fd817954dcb80b32",
            nameCourse: "Khóa 6",
            schedule: "1",
            during: 2,
            amount: 32,
            isCheck: 2,
            createDate: "7/2/2021, 10:29:13 PM",
          },
          {
            _id: "askasklaslask",
            nameCourse: "Khóa 9",
            schedule: "1",
            during: 2,
            amount: 32,
            isCheck: 2,
            createDate: "7/2/2021, 10:29:13 PM",
          },
        ],
        _id: "60df33e3fd817954dcb80bd1",
        nameRoom: "Phòng 3",
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
            (rooms[idroom].lichchan
              .slice(0, lc)
              .reduce(function (accumulator, currentValue) {
                return accumulator + parseInt(currentValue.during);
              }, 0) * 7 )+
              (rooms[idroom].lichchan[lc].during * 7);
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
            console.log(i);
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
    console.log(temp);
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
