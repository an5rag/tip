import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Body } from "./body/body";


export const Main = () => (
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);

