import { Route, Switch } from "react-router-dom";
import React from "react";

import { HomePage } from "../pages/Home";
import { ProjectsPage } from "../pages/Projects";
import { AboutPage } from "../pages/About";
import { SkillsPage } from "../pages/Skills";
import { ErrorPage } from "../pages/404";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/projects">
        <ProjectsPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/skills">
        <SkillsPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
