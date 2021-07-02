import React from 'react'
import { LoginPage } from './page/LoginPage'
import { ForgotPassword } from './page/ForgotPassword'

const routes = [{
        path: "/login",
        exact: true,
        main: () => < LoginPage / > ,
    },
    {
        path: "/forgotpassword",
        exact: true,
        main: () => < ForgotPassword / > ,
    }
];
export { routes };