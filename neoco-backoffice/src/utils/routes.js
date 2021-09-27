import React from "react";
import { ModelTable, ModelUpsert } from "../components";

export const getRoutes = ({ headers, isLoggedIn = false, user }) =>
  getRoutesFromHeaders({ headers, isLoggedIn, user }).then((routes) => {
    const authRoutes = routes.filter(({ auth = true }) => auth === true);
    const unAuthRoutes = routes.filter(({ unAuth = false }) => unAuth === true);

    return { authRoutes, unAuthRoutes };
  });

const getRoutesFromHeaders = ({ headers = [], isLoggedIn, user }) =>
  headers.reduce((reducer, header) => {
    return reducer.then((accumulator) => {
      return (
        typeof header === "function"
          ? header({ isLoggedIn, user })
          : Promise.resolve(header)
      ).then((header) => {
        return [...accumulator, ...getRoutesByType(header)];
      });
    });
  }, Promise.resolve([]));

const getRoutesByType = (header) => {
  if (typeof header.type === "undefined") {
    throw new Error(
      `You must define the type property in your ${header.options.name} header`
    );
  }

  switch (header.type) {
    case "CRUD":
      return [
        {
          name: header.options.name,
          exact: true,
          component: composeComponent({
            DefaultComponent: ModelTable,
            component: header.options?.tableOptions?.component,
            header,
          }),
          to:
            typeof header.options.route === "object"
              ? header.options.route.path
              : header.options.route,
          ...getRouteProps({ route: header.options.route }),
        },
        {
          name: header.options.name,
          component: composeComponent({
            DefaultComponent: ModelUpsert,
            component: header.options?.upsertOptions?.component,
            header,
          }),
          exact: true,
          ...getRouteProps({
            route: header.options.route,
            suffix: "/new",
          }),
        },
        {
          name: header.options.name,
          component: composeComponent({
            DefaultComponent: ModelUpsert,
            component: header.options?.upsertOptions?.component,
            header,
          }),
          ...getRouteProps({
            route: header.options.route,
            suffix: "/:id",
          }),
        },
      ];

    case "Page":
      return [
        {
          name: header.options.name,
          ...(typeof header.options.route === "object"
            ? header.options.route
            : {}),
        },
      ];
  }
};

const getRouteProps = ({ route, suffix = "" }) =>
  typeof route === "object"
    ? { ...route, path: route.path + suffix }
    : { path: route + suffix };

export const getRoutePath = (route) =>
  typeof route === "object" ? route.path : route;

const composeComponent =
  ({ DefaultComponent, component, header }) =>
  (props) =>
    typeof component === "function" ? (
      component(
        {
          ...props,
          headers: header,
        },
        DefaultComponent
      )
    ) : (
      <DefaultComponent {...props} header={header} />
    );
