import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { About } from "../../about/about";
import { Contact } from "../../contact/contact";
import { Faq } from "../../faq/faq";
import { Home } from "../../home/home";
import { Press } from "../../press/press";
import { Privacy } from "../../privacy/privacy";
import { Stories } from "../../stories/stories";
import { Team } from "../../team/team";

import { NotFoundPage } from "../404/404";

export const Body = () => (
  <div className="tip-body">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="//" component={Home} />
      <Route path="/stories" component={Stories} />
      <Route path="/story" component={Stories} />
      <Route path="/storybooks" component={Stories} />
      <Route path="/team" component={Team} />
      <Route path="/press" component={Press} />

      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/privacy-policy" component={Privacy} />

      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
