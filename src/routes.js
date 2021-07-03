import React from 'react'
import { LoginPage } from './page/LoginPage'
import { ForgotPassword } from './page/ForgotPassword'
import { AddRoom } from './page/AddRoom/AddRoom'
import { ShowRoom } from './page/ShowRoom'
import { AddCourse } from './page/AddCourse'

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
    }
];
export { routes };