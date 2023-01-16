import React from "react";
import {Login} from "../pages/Login";
import {Schedule} from "../pages/Schedule";

export type RouteType = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const routes = {
    login: '/login',
    schedule: '/',
}

export const publicRoutes: RouteType[] = [
    {
        path: routes.login,
        component: Login,
        exact: true,
    },
]

export const privetRoutes: RouteType[] = [
    {
        path: routes.schedule,
        component: Schedule,
        exact: false,
    },
]