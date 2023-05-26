import React, { memo } from "react";
import { BrowserRouter, Route, RouteProps, Switch } from "react-router-dom";
import { omit } from "lodash";
import { Typography } from "@mui/material";
import { Col } from ".";
import { checkPermissions } from "../../until/helpers/functions";

export interface BasicRoute extends RouteProps {
  position?: "left" | "right";
  path: string;
  routes?: BasicRoute[];
  action?: "new-tab";
  label?: string;
  class?: string;
  roles?: string[];
  icon?: string;
}

export interface PrivateRoute extends BasicRoute {
  routes?: PrivateRoute[];
}

export interface AppRouterProps {
  basename?: string;
  authorities?: any;
  defaultRedirect: string;
  privateRoutes?: PrivateRoute[];
  publicRoutes?: BasicRoute[];
  notFoundPage?: React.FunctionComponent<any>;
  unauthorizedPage?: React.FunctionComponent<any>;
}

const omitRouteRenderProps = (route: BasicRoute) => {
  return omit(route, ["component", "routes"]);
};

const NotFoundPageDefault = () => {
  return (
    <div>
      <h1>This is a not found page by default</h1>
    </div>
  );
};

const UnauthorizedPageDefault = () => {
  return (
    <Col sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <Typography fontSize="lg" fontWeight="bold">
        Your account is not verified yet. Please contact IT team for supports
      </Typography>
    </Col>
  );
};

export const EmptyLayout = memo(({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
});

export const AppRouter = memo(function AppRouter({
  basename,
  authorities,
  defaultRedirect,
  privateRoutes = [],
  publicRoutes = [],
  notFoundPage: NotFoundPage = NotFoundPageDefault,
  unauthorizedPage: UnauthorizedPage = UnauthorizedPageDefault,
}: AppRouterProps) {
  const renderPublicRoute = (route: BasicRoute, parentPath = "") => {
    const {
      path,
      component: RouteComponent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
      exact,
    } = route;
    const fullPath = parentPath && parentPath !== "/" ? `${parentPath}${path}` : path;

    // Handle redirect URLs
    return !route.routes ? (
      <Route
        key={`public-${fullPath}`}
        exact={exact === undefined ? true : exact}
        {...omitRouteRenderProps(route)}
        path={fullPath}
        render={(props) => <RouteComponent {...props} />}
      />
    ) : (
      <Route
        key={`public-${fullPath}`}
        exact={exact === undefined ? true : exact}
        {...omitRouteRenderProps(route)}
        path={fullPath}
        render={(props) => (
          <RouteComponent {...props}>
            <Switch>
              {route?.routes?.map((subRoute) => renderPublicRoute(subRoute, fullPath))}
              {/* {renderNotFoundRoute()} */}
            </Switch>
          </RouteComponent>
        )}
      />
    );
  };

  const renderPrivateRoute = (route: PrivateRoute, parentPath = "") => {
    const { roles, path, component: RouteComponent = EmptyLayout, exact } = route;
    const hasPermission = checkPermissions(authorities, roles);
    const fullPath = parentPath && parentPath !== "/" ? `${parentPath}${path}` : path;

    if (!hasPermission) {
      return;
    }

    if (route.routes) {
      const subRoutes = route?.routes?.map((subRoute) => renderPrivateRoute(subRoute, fullPath));
      return (
        <Route
          key={`private-${fullPath}`}
          exact={exact === undefined ? true : exact}
          {...omitRouteRenderProps(route)}
          path={fullPath}
          render={(props) => {
            return (
              <RouteComponent {...props}>
                <Switch>{subRoutes}</Switch>
              </RouteComponent>
            );
          }}
        />
      );
    }
    return (
      <Route
        key={`private-${fullPath}`}
        exact={exact === undefined ? true : exact}
        {...omitRouteRenderProps(route)}
        path={fullPath}
        render={(props) => <RouteComponent {...props} />}
      />
    );
  };

  return (
    <BrowserRouter basename="/">
      <Switch>
        {publicRoutes.map((route) => {
          return renderPublicRoute(route);
        })}
      </Switch>
      <Switch>
        {privateRoutes.map((route) => {
          return renderPrivateRoute(route);
        })}
      </Switch>
      {/* <Switch>{renderNotFoundRoute()}</Switch> */}
    </BrowserRouter>
  );
});
