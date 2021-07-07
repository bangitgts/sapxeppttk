import React from "react";
import { LoginPage } from "./page/LoginPage";
import { ForgotPassword } from "./page/ForgotPassword";
import { EditRoom } from "./page/EditRoom";
import { EditCourse } from "./page/EditCourse";


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
        path: "/editroom/:id",
        exact: false,
        main: ({ match }) => < EditRoom match = { match }
        />,
    },
    {
        path: "/editcourse/:id",
        exact: false,
        main: ({ match }) => < EditCourse match = { match }
        />,
    }
];
export { routes };