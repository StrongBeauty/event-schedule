import React, {FC} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {privetRoutes, publicRoutes, routes, RouteType} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const AppRouter: FC = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth)

    const routesMap = (routes: RouteType[] ) => {
        return routes.map(route =>
                <Route key={route.path}
                       {...route}
                />
    )
    }

    return (
        isAuth
            ?
            <Switch>
                {routesMap(privetRoutes)}
                <Redirect to={routes.schedule}/>
            </Switch>
            :
            <Switch>
                {routesMap(publicRoutes)}
                <Redirect to={routes.login}/>
            </Switch>
    )
}