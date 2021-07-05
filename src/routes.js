import React from "react";
import { LoginPage } from "./page/LoginPage";
import { ForgotPassword } from "./page/ForgotPassword";
import { ShowRoom } from "./page/ShowRoom";
import { AddCourse } from "./page/AddCourse";
import { EditRoom } from "./page/EditRoom";
import { PageCalender } from "./page/PageCalender";
import { ShowCourse } from "./page/ShowCourse";
import { ChangePassword } from "./page/ChangePassword";

const routes = [{
        path: "/login",
        exact: true,
        main: () => < LoginPage / > ,
    },
    {
        path: "/forgotpassword",
        exact: true,
        main: () => < ForgotPassword / > ,
    },
    {
        path: "/roominformation",
        exact: false,
        main: () => < ShowRoom / > ,
    },
    {
        path: "/addcourse",
        exact: false,
        main: () => < AddCourse / > ,
    },
    {
        path: "/editroom/:id",
        exact: false,
        main: ({ match }) => < EditRoom match = { match }
        />,
    },
    {
        path: "/calender",
        exact: false,
        main: ({ match }) => < PageCalender match = { match }
        />,
    },
    {
        path: "/showcourse",
        exact: false,
        main: () => < ShowCourse / > ,
    },
    {
        path: "/changepassword",
        exact: false,
        main: () => < ChangePassword / > ,
    }
];
export { routes };