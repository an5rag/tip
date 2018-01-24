import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NotFoundPage } from "./404/404";
import { Body } from "./body/body";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export const Main = () => (
  <Switch>
    <Route path="/404" render={() => (
      <NotFoundPage />
    )} />
    <Route render={() => {
      return (
        <div>
          <Header showNavBar={true} />
          <Body />
          <Footer />
        </div>
      );
    }} />
  </Switch>
);
