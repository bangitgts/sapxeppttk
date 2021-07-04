import React from 'react'
import { LoginPage } from './page/LoginPage'
import { ForgotPassword } from './page/ForgotPassword'
import { ShowRoom } from './page/ShowRoom'
import { AddCourse } from './page/AddCourse'
import { EditRoom } from './page/EditRoom'
import { PageCalender } from './page/PageCalender'
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
        / > ,
    },
    {
        path: "/calender",
        exact: false,
        main: ({ match }) => < PageCalender match = { match }
        / > ,
    }
];
export { routes };